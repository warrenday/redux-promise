export default function promiseMiddleware ({ dispatch, getState }) {
  return next => (action) => {
    // Handle thunks
    const actionObject = typeof action === 'function' ? action(dispatch, getState) : action;
    
    // Extract data from action
    const { promise, type, ...rest } = actionObject

    // Pass action on if not promise
    if (!promise) {
      return next(action)
    }

    // Begin action
    dispatch({ ...rest, type, status: 'PENDING' })

    // Fire promise
    return promise().then(
      (result) => {
        // Success action
        dispatch({ ...rest, result, type, status: 'SUCCESS' })
      },
      (error) => {
        // Fail action
        dispatch({ ...rest, error, type, status: 'FAILURE' })
      }
    )
  }
}

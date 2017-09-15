export default function promiseMiddleware ({ dispatch }) {
  return next => (action) => {
    const { promise, type, ...rest } = action

    // Pass action on if not promise
    if (!promise) {
      return next(action)
    }

    // Begin action
    dispatch({ ...rest, type, status: 'PENDING' })

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

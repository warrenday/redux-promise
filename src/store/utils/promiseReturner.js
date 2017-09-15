// Wraps and returns the promise
// when an action is dispatched. Useful for
// isomorphic applications when awaiting
// promises on the server.

/* Example

// Create action as normal
const getProperties = ({ page }) => ({
    type: GET_PROPERTIES,
    promise: () => service.getProperties({ page })
})

// Wrap in promiseReturner
const myAction = promiseReturner(getProperties)

// Now you can wait the promise
await dispatch(myAction({ page: 1 }))

*/

export default actionCreator => props => (dispatch, getState) => {
  const action = actionCreator(props);

  // Handle thunks
  const actionObject = typeof action === 'function' ? action(dispatch, getState) : action;

  // Get promise
  const actionPromise = actionObject.promise();

  // Dispatch action
  dispatch({
      ...actionObject,
      promise: () => actionPromise,
  });

  // Return the promise
  return actionPromise;
};
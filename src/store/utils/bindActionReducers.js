export default (defaultState, actionReducers, customStateModifier) => (state, action) => {
  const reducer = actionReducers[action.type]

  // If reducers is not matched return the state
  if (!reducer) {
    return defaultState
  }

  const newStateSlice = reducer(state, action)
  
  // Pass the state into the custom state modifier
  const newState = customStateModifier({
    ...state,
    ...newStateSlice
  }, action)

  return newState
}
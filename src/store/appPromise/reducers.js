// Update the store based on the current status of a
// promise
export const fetchPeople = (state, action) => {
  switch (action.status) {
    case 'SUCCESS':
      return { people: action.result }
    default:
      return state
  }
}

export const fetchPerson = (state, action) => {
  return {
    statuses: {
      ...state.statuses,
      [action.payload.id]: action.status
    }
  }
}
export const fetchPeople = (state, action) => {
  switch (action.status) {
    case 'SUCCESS':
      return { people: action.result }
    default:
      return state
  }
}
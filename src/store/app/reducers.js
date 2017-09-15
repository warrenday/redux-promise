// People
export const fetchPeopleBegin = (state, action) => ({
  ...state,
  status: 'PENDING'
})

export const fetchPeopleError = (state, action) => ({
  ...state,
  status: 'ERROR'
})

export const fetchPeopleComplete = (state, action) => ({
  ...state,
  status: null,
  people: action.payload.people
})


// Person
export const fetchPersonBegin = (state, action) => ({
  ...state,
  status: 'PENDING',
  statuses: {
    ...state.statuses,
    [action.payload.id]: 'PENDING'
  }
})

export const fetchPersonError = (state, action) => ({
  ...state,
  status: 'ERROR',
  statuses: {
    ...state.statuses,
    [action.payload.id]: 'ERROR'
  }
})

export const fetchPersonComplete = (state, action) => ({
  ...state,
  status: 'SUCCESS',
  statuses: {
    ...state.statuses,
    [action.payload.id]: 'SUCCESS'
  }
})
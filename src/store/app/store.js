import {
  FETCH_PEOPLE_BEGIN,
  FETCH_PEOPLE_COMPLETE,
  FETCH_PEOPLE_FAIL,

  FETCH_PERSON_BEGIN,
  FETCH_PERSON_COMPLETE,
  FETCH_PERSON_FAIL
} from './actionTypes'

import {
  fetchPeopleBegin,
  fetchPeopleError,
  fetchPeopleComplete,

  fetchPersonBegin,
  fetchPersonError,
  fetchPersonComplete,
} from './reducers'

const defaultState = {
  people: [],
  errors: {},
  statuses: {},
  status: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_BEGIN:
      return fetchPeopleBegin(state, action)
    case FETCH_PEOPLE_COMPLETE:
      return fetchPeopleComplete(state, action)
    case FETCH_PEOPLE_FAIL:
      return fetchPeopleError(state, action)

    case FETCH_PERSON_BEGIN:
      return fetchPersonBegin(state, action)
    case FETCH_PERSON_COMPLETE:
      return fetchPersonComplete(state, action)
    case FETCH_PERSON_FAIL:
      return fetchPersonError(state, action)
    default:
      return state
  }
}

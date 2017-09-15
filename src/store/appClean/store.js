import bindActionReducers from '../utils/bindActionReducers'

import {
  FETCH_PEOPLE,
  FETCH_PERSON
} from './actionTypes'

import {
  fetchPeople,
  fetchPerson
} from './reducers'

const defaultState = {
  people: [],
  statuses: {},
  status: null,
  lastAction: null
}

export default bindActionReducers(defaultState, {
  [FETCH_PEOPLE]: fetchPeople,
  [FETCH_PERSON]: fetchPerson
}, (state, action) => {
  return {
    ...state,
    status: action.status,
    lastAction: action.type
  }
})
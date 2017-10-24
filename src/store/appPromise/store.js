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

// Rather than a long switch statement you can
// bind a reducer directly to an actionType
export default bindActionReducers(defaultState, {
  [FETCH_PEOPLE]: fetchPeople,
  [FETCH_PERSON]: fetchPerson
}, (state, action) => {
  // Add common reducer logic to run on every matched
  // actionType
  return {
    ...state,
    status: action.status,
    lastAction: action.type
  }
})
import bindActionReducers from '../utils/bindActionReducers'

import {
  FETCH_PEOPLE,
} from './actionTypes'

import {
  fetchPeople,
} from './reducers'

const defaultState = {
  people: [],
  status: null,
  lastAction: null
}

export default bindActionReducers(defaultState, {
  [FETCH_PEOPLE]: fetchPeople
}, (state, action) => {
  return {
    ...state,
    status: action.status,
    lastAction: action.type
  }
})
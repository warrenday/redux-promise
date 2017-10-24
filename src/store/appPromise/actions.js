import {
  FETCH_PEOPLE,
  FETCH_PERSON
} from './actionTypes'

import * as peopleService from './service'

// Middleware can still work with thunks
export const fetchPeople = () => (dispatch) => (
  dispatch({
    type: FETCH_PEOPLE,
    promise: peopleService.fetchPeople
  })
)

export const fetchPerson = (id) => ({
  type: FETCH_PERSON,
  promise: () => peopleService.fetchPerson(id),
  payload: { id }
})
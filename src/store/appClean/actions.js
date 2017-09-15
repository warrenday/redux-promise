import {
  FETCH_PEOPLE,
  FETCH_PERSON
} from './actionTypes'

import * as peopleService from './service'

export const fetchPeople = () => ({
  type: FETCH_PEOPLE,
  promise: peopleService.fetchPeople
})

export const fetchPerson = (id) => ({
  type: FETCH_PERSON,
  promise: () => peopleService.fetchPerson(id),
  payload: { id }
})
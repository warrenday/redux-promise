import {
  FETCH_PEOPLE
} from './actionTypes'

import * as peopleService from './service'

export const fetchPeople = () => ({
  type: FETCH_PEOPLE,
  promise: peopleService.fetchPeople
})

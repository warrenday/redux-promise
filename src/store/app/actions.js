import {
  FETCH_PEOPLE_BEGIN,
  FETCH_PEOPLE_COMPLETE,
  FETCH_PEOPLE_FAIL,

  FETCH_PERSON_BEGIN,
  FETCH_PERSON_COMPLETE,
  FETCH_PERSON_FAIL
} from './actionTypes'

import * as peopleService from './service'

// Fetch People
const fetchPeopleBegin = () => ({
  type: FETCH_PEOPLE_BEGIN,
})

const fetchPeopleComplete = people => ({
  type: FETCH_PEOPLE_COMPLETE,
  payload: { people }
})

const fetchPeopleFail = (err) => ({
  type: FETCH_PEOPLE_FAIL,
  payload: { err }
})

export const fetchPeople = () => (dispatch, getState) => {
  // Begin async call
  dispatch(fetchPeopleBegin())

  // Fire promise
  peopleService.fetchPeople()
    .then(people => {
      // Complete async call
      dispatch(fetchPeopleComplete(people))
    })
    .catch(err => {
      // Fail async call
      dispatch(fetchPeopleFail(err))
    })
}


// Fetch Person
const fetchPersonBegin = (id) => ({
  type: FETCH_PERSON_BEGIN,
  payload: { id }
})

const fetchPersonComplete = (id, person) => ({
  type: FETCH_PERSON_COMPLETE,
  payload: { id, person }
})

const fetchPersonFail = (id, err) => ({
  type: FETCH_PERSON_FAIL,
  payload: { id, err }
})

export const fetchPerson = (id) => (dispatch, getState) => {
  // Begin async call
  dispatch(fetchPersonBegin(id))

  // Fire promise
  peopleService.fetchPerson(id)
    .then(person => {
      // Complete async call
      dispatch(fetchPersonComplete(id, person))
    })
    .catch(err => {
      // Fail async call
      dispatch(fetchPersonFail(id, err))
    })
}
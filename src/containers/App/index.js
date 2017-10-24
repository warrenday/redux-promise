import React from 'react'
import { connect } from 'react-redux'
import App from './App'
import { actions as appActions } from '../../store/appPromise'

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPeople()
  }

  render() {
    return <App {...this.props} />
  }
}

const mapStateToProps = state => ({
  people: state.app.people,
  status: state.app.status,
  statuses: state.app.statuses
})

const mapDispatchToProps = dispatch => ({
  fetchPeople() {
    // When dispatching the promise is returned
    dispatch(appActions.fetchPeople()).then(() => {
      console.log('data fetched and promise returned from thunk :)')
    })
  },
  onPersonClick(id) {
    dispatch(appActions.fetchPerson(id)).then(() => {
      console.log('data fetched and promise returned')
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

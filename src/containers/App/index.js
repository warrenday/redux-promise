import React from 'react'
import { connect } from 'react-redux'
import App from './App'
import { actions as appActions } from '../../store/app'

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
    dispatch(appActions.fetchPeople())
  },
  onPersonClick(id) {
    dispatch(appActions.fetchPerson(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

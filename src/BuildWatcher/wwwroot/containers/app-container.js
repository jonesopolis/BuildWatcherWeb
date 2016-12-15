import { connect } from 'react-redux'
import App from '../components/app'
import  { getUsername } from '../actions/user'
import  { getAllBuilds, getSubscribedBuilds, unsubscribeFromBuild, buildUpdated } from '../actions/build'

const matchStateToProps = (state) => ({
    builds: state.builds,
    subscribedBuilds: state.subscribedBuilds
});

const matchDispatchToProps = ({
  getAllBuilds: getAllBuilds,
  getSubscribedBuilds: getSubscribedBuilds,
  unsubscribeFromBuild: unsubscribeFromBuild,
  getUsername: getUsername,
  buildUpdated: buildUpdated
});

const AppContainer = connect(
  matchStateToProps,
  matchDispatchToProps
)(App)

export default AppContainer

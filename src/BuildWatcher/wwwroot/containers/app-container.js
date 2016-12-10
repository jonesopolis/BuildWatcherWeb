import { connect } from 'react-redux'
import App from '../components/app'
import  { getUsername } from '../actions/user'
import  { getAllBuilds, getSubscribedBuilds, unsubscribeFromBuild } from '../actions/build'

const matchStateToProps = (state) => ({
    builds: state.builds,
    subscribedBuilds: state.subscribedBuilds
});

const matchDispatchToProps = ({
  getAllBuilds: getAllBuilds,
  getSubscribedBuilds: getSubscribedBuilds,
  unsubscribeFromBuild: unsubscribeFromBuild,
  getUsername: getUsername
});

const AppContainer = connect(
  matchStateToProps,
  matchDispatchToProps
)(App)

export default AppContainer

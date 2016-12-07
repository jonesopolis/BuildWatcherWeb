import { connect } from 'react-redux'
import App from '../components/app'
import  { getBuilds, setUsername } from '../actions/actions'

const matchStateToProps = (state) => ({
    builds: state.builds,
    subscribedBuilds: state.builds.filter((b) => b.isSubscribed) 
});

const matchDispatchToProps = ({
  getBuilds: getBuilds,
  setUsername: setUsername
});

const AppContainer = connect(
  matchStateToProps,
  matchDispatchToProps
)(App)

export default AppContainer

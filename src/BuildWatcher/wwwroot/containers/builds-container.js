import { connect } from 'react-redux'
import Builds from '../components/builds'
import  { getBuilds } from '../actions/actions'

const mapStateToProps = (state) => ({
  builds: state.builds
})

const matchDispatchToProps = ({
  getBuilds: getBuilds
});

const BuildsContainer = connect(
  mapStateToProps,
  matchDispatchToProps
)(Builds)

export default BuildsContainer

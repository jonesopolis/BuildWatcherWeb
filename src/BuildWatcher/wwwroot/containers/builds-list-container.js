import { connect } from 'react-redux'
import BuildsList from '../components/nav-bar/builds-list'
import { subscribeToBuild } from '../actions/actions'

const mapStateToProps = (state) => ({
    builds: state.builds
})

const mapDispatchToProps = ({
  subscribeToBuild: subscribeToBuild
})

const BuildsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildsList)

export default BuildsListContainer


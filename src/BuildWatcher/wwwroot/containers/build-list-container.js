import { connect } from 'react-redux'
import BuildList from '../components/nav-bar/build-list'
import { subscribeToBuild } from '../actions/build'

const mapStateToProps = (state) => ({
    builds: state.builds,
    subscribedBuilds: state.subscribedBuilds.map((b) => b.name)
})

const mapDispatchToProps = ({
  subscribeToBuild: subscribeToBuild
})

const BuildListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildList)

export default BuildListContainer


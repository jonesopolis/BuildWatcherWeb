import { connect } from 'react-redux'
import NavBar from '../components/nav-bar/nav-bar'

const mapStateToProps = (state) => ({
    username: state.username
})

const NavBarContainer = connect(
  mapStateToProps
)(NavBar)

export default NavBarContainer


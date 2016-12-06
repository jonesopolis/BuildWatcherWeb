import { connect } from 'react-redux'
import NavBar from '../components/nav-bar'
import  { setUsername } from '../actions/actions'

const mapStateToProps = (state) => ({
    username: state.username
})

const mapDispatchToProps = ({ 
    setUsername: setUsername
}) 

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavBarContainer


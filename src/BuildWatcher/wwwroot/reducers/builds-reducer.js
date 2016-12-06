const BuildReducer = (action) => {
  switch (action.type) {
    case 'ADD_BUILD':
      return {
        name: action.name,
        friendlyName: action.friendlyName
      }    
    default:
      return state
  }
}

const BuildsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_BUILDS':
      return action.builds
    case 'ADD_BUILD':
      return [
        ...state,
        BuildReducer(action)
      ]    
    default:
      return state
  }
}

export default BuildsReducer
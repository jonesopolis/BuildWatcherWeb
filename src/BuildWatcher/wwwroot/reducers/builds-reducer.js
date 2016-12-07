const BuildsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_BUILDS':
      return action.builds
    case 'SUBSCRIBE_TO_BUILD':
      var sub = state.find(b => b.name === action.name)
      sub.isSubscribed = true
      return [ ...state ]   
    default:
      return state
  }
}

export default BuildsReducer
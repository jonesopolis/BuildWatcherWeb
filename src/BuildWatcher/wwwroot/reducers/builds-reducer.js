const BuildsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_BUILDS':
      return action.builds
    default:
      return state
  }
}

export default BuildsReducer
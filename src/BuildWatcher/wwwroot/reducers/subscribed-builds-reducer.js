const SubscribedBuildsReducer = (state = [], action) => {

    switch (action.type) {
        case 'GET_SUBSCRIBED_BUILDS':
            return action.subscribedBuilds
        case 'SUBSCRIBE_TO_BUILD':
            return [
                ...state,
                action.build
            ]
        case 'UNSUBSCRIBE_FROM_BUILD':
            return state.filter(function (b) {
                return b.name !== action.name;
            });
        case 'BUILD_UPDATED':

            return state.map((b, i) => b.name === action.build.name ? action.build : b)



            // console.log('')
            // console.log(state[0].latestBuild);
            // console.log(action.build.latestBuild);
            // console.log('')
            //return state;
        default:
            return state
    }
}

export default SubscribedBuildsReducer
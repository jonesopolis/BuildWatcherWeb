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
        
            for(var b of state) {
                if(b.name === action.build.name) {
                    var i = state.indexOf(b);
                    state[i] = action.build;
                    state.remove(b)
                } 
            }
            return state;
        default:
            return state
    }
}

export default SubscribedBuildsReducer
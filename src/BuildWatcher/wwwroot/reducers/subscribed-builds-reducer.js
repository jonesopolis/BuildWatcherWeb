const SubscribedBuildsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SUBSCRIBED_BUILDS':
            return action.subscribedBuilds
        case 'SUBSCRIBE_TO_BUILD':
            return [
                ...state,
                {
                    name: action.name,
                    friendlyname: action.friendlyName
                }
            ]
        case 'UNSUBSCRIBE_FROM_BUILD':
            return state.filter(function (b) {
                return b.name !== action.name;
            });
        default:
            return state
    }
}

export default SubscribedBuildsReducer
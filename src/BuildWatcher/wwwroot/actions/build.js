import { getAllBuildsApi, getSingleBuildApi, getSubscribedBuildsApi, subscribeToBuildApi, unsubscribeFromBuildApi } from '../api/build'

export const getAllBuilds = () => {
    return (dispatch) => {
        getAllBuildsApi().then(s => dispatch(resolvedGetAllBuilds(s.data)), e => alert('error getting all build'));
    }
}

export const resolvedGetAllBuilds = (builds) => ({
    type: 'GET_ALL_BUILDS',
    builds: builds
})

export const getSubscribedBuilds = () => {
    return (dispatch) => {
        getSubscribedBuildsApi().then(s => dispatch(resolvedGetSubscribedBuilds(s.data)), e => alert('error getting subscribed builds'));
    }
}

export const resolvedGetSubscribedBuilds = (subscribedBuilds) => ({
    type: 'GET_SUBSCRIBED_BUILDS',
    subscribedBuilds: subscribedBuilds
})

export const subscribeToBuild = (name) => {
    return (dispatch) => {
        subscribeToBuildApi(name).then(s => dispatch(resolvedSubscribeToBuild(name)), e => alert('error subscribing to build'));
    }
}

export const resolvedSubscribeToBuild = (name) => ({
    type: 'SUBSCRIBE_TO_BUILD',
    name: name
})

export const unsubscribeFromBuild = (name) => {
    return (dispatch) => {
        unsubscribeFromBuildApi(name).then(s => dispatch(resolvedUnsubscribeFromBuild(name)), e => alert('error unsubscribing to build'));
    }
}

export const resolvedUnsubscribeFromBuild = (name) => ({
    type: 'UNSUBSCRIBE_FROM_BUILD',
    name: name
})
import axios from 'axios';

export const setUsername = () => {
    return (dispatch) => {
        axios({
            url: '/api/user',
            method: 'get',
            headers: { 'Content-type': 'text/html; charset=UTF-8' }
        }).then(s => dispatch(resolvedSetUsername(s.data)), e => alert('error getting builds'));
    }
}

export const resolvedSetUsername = (username) => ({
    type: 'SET_USERNAME',
    username
})

export const getBuilds = () => {
    return (dispatch) => {
        axios({
            url: '/api/builds',
            method: 'get',
            headers: { 'Content-type': 'text/html; charset=UTF-8' }
        }).then(s => dispatch(resolvedGetBuilds(s.data)), e => alert('error getting builds'));
    }
}

export const resolvedGetBuilds = (builds) => ({
    type: 'GET_BUILDS',
    builds: builds
})

export const subscribeToBuild = (name) => {
    return (dispatch) => {
        axios({
            url: '/api/builds',
            method: 'get',
            headers: { 'Content-type': 'text/html; charset=UTF-8' }
        }).then(s => dispatch(resolvedSubscribeToBuild(name)), e => alert('error subscribing to build'));
    }
}

export const resolvedSubscribeToBuild = (name) => ({
    type: 'SUBSCRIBE_TO_BUILD',
    name: name
})
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

export const addBuild = () => {
    return (dispatch) => {
        axios({
            url: '/api/builds',
            method: 'get',
            headers: { 'Content-type': 'text/html; charset=UTF-8' }
        }).then(s => dispatch(resolvedAddBuild('yessir', 'friendly!')), e => alert('error getting builds'));
    }
}

export const resolvedAddBuild = (name, friendlyName) => ({
    type: 'ADD_BUILD',
    name: name,
    friendlyName: friendlyName
})
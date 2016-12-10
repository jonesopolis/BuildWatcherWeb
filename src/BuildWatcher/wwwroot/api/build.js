import axios from 'axios';

export const getAllBuildsApi = () => {
    return axios({
        url: '/api/builds/all',
        method: 'get',
        headers: { 'Content-type': 'text/html; charset=UTF-8' }
    });
}

export const getSubscribedBuildsApi = () => {
    return axios({
        url: '/api/builds',
        method: 'get',
        headers: { 'Content-type': 'text/html; charset=UTF-8' }
    });
}

export const subscribeToBuildApi = (name) => {
    return axios({
        url: '/api/builds/subscribe/' + name,
        method: 'get',
        headers: { 'Content-type': 'text/html; charset=UTF-8' }
    });
}


export const unsubscribeFromBuildApi = (name) => {
    return axios({
        url: '/api/builds/unsubscribe/' + name,
        method: 'get',
        headers: { 'Content-type': 'text/html; charset=UTF-8' }
    });
}

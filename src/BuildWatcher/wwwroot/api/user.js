import axios from 'axios';

export const getUsernameApi = () => {
    return axios({
        url: '/api/user',
        method: 'get',
        headers: { 'Content-type': 'text/html; charset=UTF-8' }
    });
}
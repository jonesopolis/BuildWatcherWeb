import { getUsernameApi } from '../api/user'

export const getUsername = () => {
    return (dispatch) => {
        getUsernameApi().then(s => dispatch(resolvedGetUsername(s.data)), e => alert('error getting builds'));
    }
}

export const resolvedGetUsername = (username) => ({
    type: 'GET_USERNAME',
    username
})


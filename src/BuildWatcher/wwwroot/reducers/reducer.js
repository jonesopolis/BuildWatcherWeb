import { combineReducers } from 'redux'
import UsernameReducer from './username-reducer'
import BuildsReducer from './builds-reducer'

const BuildWatcherApp = (state = {}, action) => {
    return {
        username: UsernameReducer(state.username, action),
        builds: BuildsReducer(state.builds, action),
    }
}

export default BuildWatcherApp;

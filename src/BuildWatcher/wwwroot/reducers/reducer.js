import { combineReducers } from 'redux'
import UsernameReducer from './username-reducer'
import BuildsReducer from './builds-reducer'

const BuildWatcherApp = combineReducers({
    UsernameReducer,
    BuildsReducer
})

export default BuildWatcherApp;

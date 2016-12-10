import { combineReducers } from 'redux'
import UsernameReducer from './username-reducer'
import BuildsReducer from './builds-reducer'
import SubscribedBuildsReducer from './subscribed-builds-reducer'

const BuildWatcherApp = combineReducers({
    username: UsernameReducer,
    builds: BuildsReducer,
    subscribedBuilds: SubscribedBuildsReducer
})

export default BuildWatcherApp;

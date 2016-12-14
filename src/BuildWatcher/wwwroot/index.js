import Styles from './site.css'

import SignalR from './singalr-guy'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AppContainer from './containers/app-container'
import reducer from './reducers/reducer'

let store = createStore(
    reducer,
    applyMiddleware(thunk)
);

let x = new SignalR();

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);


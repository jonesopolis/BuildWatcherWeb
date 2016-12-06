import Styles from './site.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './components/app'
import reducer from './reducers/reducer'

let store = createStore(
    reducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);


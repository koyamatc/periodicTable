require('./periodicTable.css');
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import periodicTableApp from './reducers'
import App from './components/App'

let store = createStore(periodicTableApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
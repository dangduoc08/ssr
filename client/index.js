import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import App from './containers/App'
import rootReducer from './reducers'
import rootSaga from './sagas'
import './index.scss'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
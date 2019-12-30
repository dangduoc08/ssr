import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { matchRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import App from '../client/containers/App'
import rootReducer from '../client/redux'
import rootSaga from '../client/saga'
import { layoutRoutes } from '../client/routers'

const server = express()
server.use(express.static('statics'))
server.use(express.static('views'))
server.set('view engine', 'ejs')

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

server.get('*', async (req, res) => {
  console.log(matchRoutes(layoutRoutes, req.path))
  const routes = matchRoutes(layoutRoutes, req.path)[0]
  if (routes) {
    const { componentGetReadyToMount } = routes.route.component
    if (componentGetReadyToMount) {
      componentGetReadyToMount(store.dispatch, () => {
        const app = ReactDOMServer.renderToString(
          <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
              <App />
            </StaticRouter>
          </Provider>
        )
        res.render('index', { app, initialState: serialize(store.getState()) })
      })
    } else {
      const app = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.path} context={{}}>
            <App />
          </StaticRouter>
        </Provider>
      )
      res.render('index', { app, initialState: serialize(store.getState()) })
    }
  }
})

server.listen(8080, () => console.log('Listen on port 8080!')) //eslint-disable-line
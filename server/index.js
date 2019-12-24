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

server.use(express.static('views'))
server.set('view engine', 'ejs')

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

server.get('*', async (req, res) => {
  const routes = matchRoutes(layoutRoutes, req.path)[0]
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  )

  if (routes) {
    const { serveData } = routes.route.component
    if (serveData) {
      serveData(store.dispatch, () => {
        res.render('index', { app, initialState: serialize(store.getState()) })
      })
    } else {
      res.render('index', { app, initialState: serialize({}) })
    }
  } else {
    res.render('index', { app, initialState: serialize({}) })
  }
})

server.listen(8080, () => console.log('Listen on port 8080!')) //eslint-disable-line
const { createStore, compose, applyMiddleware } = require('redux')

const reducer = require('./reducers')

let storeEnhancers  = []
let middleware = []

if (process.env.NODE_ENV === 'development') {
  var logger = require('redux-logger')
  var { persistState } = require('redux-devtools')
  
  var DevTools = require('./components/dev-tools')
}

storeEnhancers.push(
  applyMiddleware(...middleware)
)

if (process.env.NODE_ENV === 'development') {
  storeEnhancers.push(DevTools.instrument())
  storeEnhancers.push(persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  ))
}

const createEnhancedStore = compose(
  ...storeEnhancers
)(createStore)

function finalCreateStore(initialState) {
  return createEnhancedStore(reducer, initialState)
}

module.exports = finalCreateStore

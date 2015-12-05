const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')

const createStore = require('./store')

const store = createStore()
const Container = require('./container')

render(
  <Provider store={store} key="provider">
    <Container />
  </Provider>,
  document.querySelector('main')
)

if (process.env.NODE_ENV === 'development') {
  const DevTools = require('./components/dev-tools')

  render(
    <Provider store={store} key="provider">
      <div>
        <Container />
        <DevTools />
      </div>
    </Provider>,
    document.querySelector('main')
  )
}

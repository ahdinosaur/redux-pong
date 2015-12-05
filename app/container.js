const React = require('react')
const { connect } = require('react-redux')

const Pong = require('./components/pong')

const Container = React.createClass({
  render: function () {
    return <Pong { ...this.props } />
  }
})

module.exports = connect(
  (state) => state
)(Container)

const React = require('react')
const { connect } = require('react-redux')

const Pong = require('./components/pong')

const Container = React.createClass({
  render: function () {
    const { computer, player, ball } = this.props

    return <Pong
      computer={computer}
      player={player}
      ball={ball}
    />
  }
})

module.exports = connect(
  (state) => state
)(Container)

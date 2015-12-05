const React = require('react')

const Pong = React.createClass({
  render: function () {
    const { computer, player, ball } = this.props

    return <svg viewBox="0 -1 1 2">
      <rect
        className="computer"
        height={0.05}
        width={0.2}
        x={computer.position}
        y={-1}
      />
      <circle
        className="ball"
        r={0.05}
        cx={0.5}
        cy={0}
      />
      <rect
        className="player"
        height={0.05}
        width={0.2}
        x={player.position}
        y={0.95}
      />
    </svg>
  }
})

module.exports = Pong

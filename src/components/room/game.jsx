import React, { Component } from 'react';
import gameImg from '../../images/game.svg';

export default class Game extends Component {
  handleMouseOver = () => {
    this.props.onMouseOver('game');
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave('game');
  }

  render() {
    return (
      <img
        className="game"
        src={gameImg} 
        alt="myroom"
        height="5%"
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

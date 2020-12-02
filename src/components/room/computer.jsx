import React, { Component } from 'react';
import computerImg from '../../images/computer.svg';

export default class Computer extends Component {
  handleMouseOver = () => {
    this.props.onMouseOver('computer');
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave('computer');
  }

  render() {
    return (
      <img 
        className="computer"
        src={computerImg} 
        alt="myroom"
        height="19%"
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

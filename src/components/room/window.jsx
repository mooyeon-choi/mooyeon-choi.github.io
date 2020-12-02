import React, { Component } from 'react';
import windowImg from '../../images/window.svg';

export default class Window extends Component {
  handleMouseOver = () => {
    this.props.onMouseOver('window');
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave('window');
  }

  render() {
    return (
      <img 
        className="window"
        src={windowImg} 
        alt="myroom"
        height="28%"
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

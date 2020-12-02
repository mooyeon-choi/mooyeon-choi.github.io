import React, { Component } from 'react'
import blackboardImg from '../../images/blackboard.svg';

export default class Blackboard extends Component {

  handleMouseOver = () => {
    this.props.onMouseOver('blackboard');
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave('blackboard');
  }

  render() {
    return (
      <img
        className="blackboard"
        src={blackboardImg} 
        alt="myroom"
        height="18%"
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

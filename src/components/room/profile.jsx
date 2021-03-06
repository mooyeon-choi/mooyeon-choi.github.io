import React, { Component } from 'react'

import profileImg from '../../images/profile.svg';

export default class Profile extends Component {

  handleMouseOver = () => {
    this.props.onMouseOver('profile');
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave('profile');
  }

  render() {
    return (
      <img
        className="profile"
        src={profileImg} 
        alt="myroom"
        height="6.6667%"
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

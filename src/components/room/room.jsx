import React, { Component } from 'react'

import roomImg from '../../images/room.png';

export default class Room extends Component {
  render() {
    return (
      <img
        src={roomImg} 
        alt="myroom"
        height="100%"
      />
    )
  }
}

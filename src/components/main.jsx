import React, { Component } from 'react'
import '../app.css';
import Sidebar from './sidebar';
import Room from './room/room';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Room />
        <Sidebar />
      </div>
    )
  }
}

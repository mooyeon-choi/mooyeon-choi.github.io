import React, { Component } from 'react';
import '../app.css';
import Sidebar from './sidebar';
import Room from './room/room';
import Profile from './room/profile';
import Game from './room/game';
import Blackboard from './room/blackboard';



export default class Main extends Component {

  handleMouseOver = (item) => {
    console.log('mouseOver', item)
  }

  handleMouseLeave = (item) => {
    console.log('mouseLeave', item)
  }
  render() {
    return (
      <div className="main">
        <Room />
        <Profile 
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        />
        <Game 
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        />
        <Blackboard 
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        />
        <Sidebar />
      </div>
    )
  }
}

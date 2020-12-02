import React, { Component } from 'react';
import '../app.css';
import Sidebar from './sidebar';
import Room from './room/room';
import Profile from './room/profile';
import Game from './room/game';
import Blackboard from './room/blackboard';
import Computer from './room/computer';
import Window from './room/window';
import Bookshelf from './room/bookshelf';

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
        <Sidebar />
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
        <Computer 
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        />
        <Bookshelf
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        />
        <Window
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        />
      </div>
    )
  }
}

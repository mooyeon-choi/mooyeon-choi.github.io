import React, { Component } from 'react';
import bookshelfImg from '../../images/bookshelf.svg';

export default class Bookshelf extends Component {
  handleMouseOver = () => {
    this.props.onMouseOver('bookshelf');
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave('bookshelf');
  }

  render() {
    return (
      <img 
        className="bookshelf"
        src={bookshelfImg} 
        alt="myroom"
        height="14%"
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

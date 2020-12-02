import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="contents">
          <li className="content">Profile</li>
          <li className="content">Projects</li>
          <li className="content">Github</li>
          <li className="content">Interactive UI</li>
          <li className="content">체험하기</li>
          <li className="content">방명록</li>
        </ul>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './index.css'
import About from './About'
import Home from './Home'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Study Router</h1>
        <div className="container">
          <div className="side_bar">
            {/* 编写路由链接 */}
            <Link to="/about" className="link">about</Link>
            <Link to="/home" className="link">home</Link>
          </div>
          <div className="content">
            {/* 注册路由 */}
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </div>
        </div>
      </div>
    )
  }
}

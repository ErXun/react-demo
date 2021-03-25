import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './index.css'
import About from './About'
import Home from './Home'
import MyNavLink from './components/MyNavLink'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Study Router</h1>
        <div className="container">
          <div className="side_bar">
            {/* 编写路由链接 */}
            {/* <Link to="/about" className="link">about</Link> */}
            {/* <NavLink to="/about" className="link" activeClassName="demo">about</NavLink> */}
            {/* 对 Navlink 进行封装 */}
            <MyNavLink to="/about">about</MyNavLink>
            {/* <NavLink to="/home" className="link" activeClassName="demo">home</NavLink> */}
            <MyNavLink to="/home">home</MyNavLink>
          </div>


          <div className="content">
            {/* 注册路由 */}
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
              <Redirect to="/about" />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

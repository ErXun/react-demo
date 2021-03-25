import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './index.css'
import MyNavLink from '../components/MyNavLink'
import Message from './message'
import News from './news'


export default class Home extends Component {
  render() {
    // console.log(`this.props`, this.props)
    return (
      <div>
        <h1>home</h1>
        <ul className="nav">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/message" />
          </Switch>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink className="link" activeClassName="demo" {...this.props} />
    )
  }
}
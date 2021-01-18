import React, { Component } from 'react'
import Search from './Search/Search'
import List from './List/List'
import './index.css'

export default class index extends Component {

  state = {
    usersArray: []
  }


  getData = (usersArray) => {
    this.setState({
      usersArray
    })
  }

  render() {
    const { usersArray } = this.state
    return (
      <div className="search_users">
        <Search getData={this.getData} />
        <List usersArray={usersArray} />
      </div>
    )
  }
}

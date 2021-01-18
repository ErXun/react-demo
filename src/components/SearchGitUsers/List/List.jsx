import React, { Component } from 'react'
import './list.css'

export default class List extends Component {
  render() {
    return (
      <div className="list_container">
        <ul>
          {
            this.props.usersArray.map(ele => {
              return (
                <li key={ele.id}>
                  <a href={ele.html_url} rel="noreferrer">
                    <img src={ele.avatar_url} alt="" />
                  </a>
                  <h4>{ele.login}</h4>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

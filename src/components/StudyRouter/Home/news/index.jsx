import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './detail'



const listData = [
  {
    id: 1,
    title: 'News1'
  },
  {
    id: 2,
    title: 'News2'
  },
  {
    id: 3,
    title: 'News3'
  },
]


export default class News extends Component {
  state = {
    listData
  }
  render() {
    const { listData } = this.state
    return (
      <div>
        {
          listData.map(item => (
            <li key={item.id}>
              <Link to={`/home/news/detail/${item.id}/${item.title}`}>{item.title}</Link>
            </li>
          ))
        }
        <hr />
        <Route path={`/home/news/detail/:id/:title`} component={Detail} />
      </div>
    )
  }
}

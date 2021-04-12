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
  pushDetail = (id, title) => {
    // this.props.history.push(`/home/news/detail/${id}/${title}`)
    this.props.history.push({ pathname: '/home/news/detail', state: { id, title } })
  }
  replaceDetail = (id, title) => {
    this.props.history.replace(`/home/news/detail/${id}/${title}`)
  }
  render() {
    const { listData } = this.state
    console.log(`this.props,Newss`, this.props)
    return (
      <div>
        {
          listData.map(item => (
            <li key={item.id}>
              {/* 1. params 参数 */}
              {/* <Link to={`/home/news/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

              {/* 2. search 参数 */}
              {/* <Link to={`/home/news/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

              {/* 3. 路由组件的 state 的参数 */}
              <Link to={{ pathname: '/home/news/detail', state: { id: item.id, title: item.title } }}>{item.title}</Link>

              {/* 编程式路由导航 */}
              {/* push */}
              &nbsp;&nbsp;<button onClick={() => this.pushDetail(item.id, item.title)}>push{item.title}</button>
              {/* replace */}
              &nbsp;&nbsp;<button onClick={() => this.replaceDetail(item.id, item.title)}>replace{item.title}</button>
            </li>
          ))
        }
        <hr />
        {/* 1. 注册路由，声明接收 params 参数 */}
        {/* <Route path={`/home/news/detail/:id/:title`} component={Detail} /> */}

        {/* 2. 注册路由，无需声明接收 search 参数 */}
        {/* <Route path={`/home/news/detail`} component={Detail} /> */}

        {/* 3. 注册路由，无需声明接收 state 参数 */}
        <Route path={`/home/news/detail`} component={Detail} />

      </div>
    )
  }
}

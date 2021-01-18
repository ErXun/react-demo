import React, { Component } from 'react'
import axios from 'axios'
import './search.css'

export default class Search extends Component {

  search = () => {
    const { inputEle: { value } } = this
    axios.get(`https://api.github.com/search/users?q=${value}`).then(res => {
      // console.log(res.data.items);
      this.props.getData(res.data.items)
    }, error => {
      console.log(error);
    })
  }


  render() {
    return (
      <div className="search_container">
        <h1>搜索 github 用户</h1>
        <input type="text" ref={ele => this.inputEle = ele} />
        <button onClick={this.search}>搜索</button>
      </div>
    )
  }
}

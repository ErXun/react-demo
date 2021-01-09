import React, { Component } from 'react'
import { nanoid } from 'nanoid'  // 用于生成随机不重复id
import PropTypes from 'prop-types'
import './header.css'

export default class Header extends Component {

  // 对接收的 props 进行类型，必要性的限制
  static propTypes = {
    addListItem: PropTypes.func.isRequired
  }

  handleAdd = (event) => {
    const { target, keyCode } = event
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert("不可为空！")
      return
    }
    let itemObj = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    this.props.addListItem(itemObj) // 子传父
    target.value = ''
  }

  render() {
    return (
      <div>
        <h2>React—ToDoList</h2>
        <input type="text" className="input" onKeyUp={this.handleAdd} />
      </div>
    )
  }
}

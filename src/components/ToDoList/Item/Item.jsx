import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './item.css'

export default class Item extends Component {

  // 对接收的 props 进行类型，必要性的限制
  static propTypes = {
    updateItemChecked: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  }

  state = {
    isEnter: false
  }

  onMouseEvent = (flag) => {
    return () => {
      this.setState({
        isEnter: flag
      })
    }
  }
  handleChange = (id) => {
    return (event) => {
      this.props.updateItemChecked(id, event.target.checked)
    }
  }

  handleDelete = (id) => {
    if (window.confirm("确认删除吗?"))
      this.props.deleteItem(id)
  }


  render() {
    const { name, done, id } = this.props
    const { isEnter } = this.state
    return (
      <div className="item"
        onMouseEnter={this.onMouseEvent(true)}
        onMouseLeave={this.onMouseEvent(false)}
        style={{ background: isEnter ? 'skyblue' : '#fff' }}
      >
        <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
        <span className="title">{name}</span>
        <button onClick={() => this.handleDelete(id)} className="btn" style={{ display: isEnter ? 'block' : 'none' }}>delete</button>
      </div>
    )
  }
}

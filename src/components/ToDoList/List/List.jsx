import React, { Component } from 'react'
import Item from '../Item/Item'
import PropTypes from 'prop-types'
import './list.css'


export default class List extends Component {

  // 对接收的 props 进行类型，必要性的限制
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    updateItemChecked: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  }

  render() {
    const { tasks, updateItemChecked, deleteItem } = this.props
    return (
      <div className="list">
        {
          tasks.map((item => {
            return <Item key={item.id} {...item} updateItemChecked={updateItemChecked} deleteItem={deleteItem} />
          }))
        }
      </div>
    )
  }
}

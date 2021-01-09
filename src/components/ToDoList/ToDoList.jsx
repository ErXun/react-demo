import React, { Component } from 'react'
import toDoListStyle from './toDoList.module.css'
import Header from './Header/Header'
import List from './List/List'
import Footer from './Footer/Footer'

export default class ToDoList extends Component {
  // state 在哪里，操作 state 的方法就在哪里
  state = {
    tasks: [{
      id: '1',
      name: '睡觉',
      done: true
    }, {
      id: '2',
      name: '看书',
      done: true
    }, {
      id: '3',
      name: 'coding',
      done: false
    }]
  }
  addListItem = (itemObj) => {
    const { tasks } = this.state
    let newTasks = [itemObj, ...tasks]
    this.setState({
      tasks: newTasks
    })
  }

  updateItemChecked = (id, done) => {
    const { tasks } = this.state
    // 根据 id 进行匹配，修改匹配对象的属性
    const newTasks = tasks.map((obj) => {
      if (obj.id === id) {
        return { ...obj, done }
      } else {
        return obj
      }
    })
    this.setState({
      tasks: newTasks
    })
  }

  deleteItem = (id) => {
    const { tasks } = this.state
    const newTasks = tasks.filter(obj => {
      return obj.id !== id
    })
    this.setState({
      tasks: newTasks
    })
  }

  // 全选
  checkAll = (done) => {
    const { tasks } = this.state
    const newTasks = tasks.map((obj) => {
      return { ...obj, done }
    })
    this.setState({
      tasks: newTasks
    })
  }

  // 清除全部已完成 item
  clearAllChecked = () => {
    const { tasks } = this.state
    const newTasks = tasks.filter((obj) => {
      return !obj.done
    })
    this.setState({
      tasks: newTasks
    })
  }




  render() {
    const { tasks } = this.state
    return (
      <div className={toDoListStyle.content}>
        <Header addListItem={this.addListItem} />
        <List tasks={tasks} updateItemChecked={this.updateItemChecked} deleteItem={this.deleteItem} />
        <Footer tasks={tasks} checkAll={this.checkAll} clearAllChecked={this.clearAllChecked} />
      </div >
    )
  }
}

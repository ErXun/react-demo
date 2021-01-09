import React, { Component } from 'react'
import toDoListStyle from './toDoList.module.css'

export default class ToDoList extends Component {
  state = {
    dataArr: [{
      title: '睡觉',
      id: 1,
      isHover: false,
      isChecked: false
    },
    ],
    completeCount: 0
  }

  addItem = (e) => {
    let { dataArr } = this.state
    if (e.keyCode === 13) {
      if (['', null].indexOf(e.target.value) === -1) {
        dataArr.unshift({
          id: dataArr.length + 1,
          isHover: false,
          title: e.target.value,
        })
        this.setState({
          dataArr,
        })
        this.input.value = ''
      } else {
        alert("不可为空！")
      }
    }
  }

  // 鼠标悬浮操作
  onMouseEvent = (event, id) => {
    return () => {
      let { dataArr } = this.state
      dataArr.forEach((ele) => {
        if (ele.id === id) {
          if (event === 'leave') {
            ele.isHover = false
          } else if (event === 'enter') {
            ele.isHover = true
          }
        }
      });
      this.setState({
        dataArr
      })
    }
  }

  delete = (id) => {
    return () => {
      let { dataArr, completeCount } = this.state
      let itemIndex;
      dataArr.forEach((ele, i) => {
        if (ele.id === id) {
          itemIndex = i
        }
      })
      dataArr.splice(itemIndex, 1)
      this.setState({
        dataArr
      })
      completeCount = dataArr.filter(ele => {
        return ele.isChecked === true
      }).length
      this.setState({
        completeCount
      })
    }
  }

  changeChecked = (id) => {
    return (e) => {
      let { dataArr, completeCount } = this.state
      dataArr.forEach((ele) => {
        if (ele.id === id) {
          ele.isChecked = e.target.checked
        }
      })
      this.setState({
        dataArr
      })
      completeCount = dataArr.filter(ele => {
        return ele.isChecked === true
      }).length
      this.setState({
        completeCount
      })

    }
  }

  // 勾选全部
  checkAll = (e) => {
    let { dataArr, completeCount } = this.state
    dataArr.forEach((ele) => {
      ele.isChecked = e.target.checked
    })
    this.setState({
      dataArr
    })
    completeCount = dataArr.filter(ele => {
      return ele.isChecked === true
    }).length
    this.setState({
      completeCount
    })

  }

  render() {
    return (
      <div className={toDoListStyle.content}>
        <h2>React—ToDoList</h2>
        <input type="text" className={toDoListStyle.input} onKeyUp={this.addItem} ref={c => this.input = c} />
        <div className={toDoListStyle.list}>
          <ul>
            {
              this.state.dataArr.map((ele) => {
                return (
                  <li key={ele.id} onMouseEnter={this.onMouseEvent('enter', ele.id)} onMouseLeave={this.onMouseEvent('leave', ele.id)}>
                    <input type="checkbox" onChange={this.changeChecked(ele.id)} />
                    <span className="title">{ele.title}</span>
                    <button className={toDoListStyle.btn} onClick={this.delete(ele.id)} style={{ display: ele.isHover ? 'block' : 'none' }}>delete</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <input type="checkbox" onClick={this.checkAll} />
          <span>已完成 {this.state.completeCount} / 全部 {this.state.dataArr.length}</span>
        </div>
      </div >
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import footer from './footer.module.css'

export default class Footer extends Component {

  // 对接收的 props 进行类型，必要性的限制
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    checkAll: PropTypes.func.isRequired,
    clearAllChecked: PropTypes.func.isRequired,
  }
  // 全(不)选事件
  handleCheckAll = (event) => {
    this.props.checkAll(event.target.checked)
  }


  handleClearAll = () => {
    this.props.clearAllChecked()
  }


  render() {
    const { tasks } = this.props
    const totalCount = tasks.length
    const checkCount = tasks.reduce((pre, current) => { return pre + (current.done ? 1 : 0) }, 0)

    return (
      <div className={footer.content}>
        <input type="checkbox"
          checked={totalCount === checkCount && totalCount !== 0 ? true : false}
          onChange={this.handleCheckAll} />
        <span>已完成 {checkCount} / 全部 {totalCount}</span>
        <button className={footer.btn} onClick={this.handleClearAll}>清楚已完成任务</button>
      </div >
    )
  }
}

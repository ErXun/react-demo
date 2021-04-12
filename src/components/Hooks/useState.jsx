import React from 'react'

/**State Hook
 * React.useState()
 * 1. 语法： const [xxx,setXxx] = React.useState(initValue)
 * 2. useState：返回一个包含两个元素的数组，第一个为内部的当前状态值，第二个为更新状态值的方法
 * 3. setXxx 有两种写法：①setXxx(newValue)；②setXxx(value => newValue) 接收原本的状态值，返回新的状态值
 */
export default function Demo() {
  const [count, setCount] = React.useState(0)
  function add() {
    setCount(count + 1)
  }
  return (
    <div>
      <h3>和为：{count}</h3>
      <button onClick={add}>+1</button>
    </div>
  )
}

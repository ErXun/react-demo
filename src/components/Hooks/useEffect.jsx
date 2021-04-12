import React from 'react';
import ReactDOM from 'react-dom';




/**
 * Effect Hook
 * React.useEffect(fn,[])
 * 1. 默认加载界面时，会执行一次
 *  ①. 第二个参数为空时，则监听所有的状态，类似于 componentDidUpdate
 *  ②. 第二个参数为空数组时，类似于 componentDidMount
 *  ③. 第二个参数为[count]时，则表示状态 count 发生改变时，触发该方法。
 * 
 * 2. 语法说明
 *  useEffect(() => {
 * 
 *  return () => {
 *    如果 return 一个函数, 则该函数在组件卸载前执行(类似于 componentWillUnmount) 
 *  }
 * 
 * },[stateValue])
 * 
 * 3. 可以把 useEffect 看作 componentDidMount,componentDidUpdate 和 componentWillUnmount 三个函数的组合
 */
export default function UseEffect() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    console.log('000')
    let domEle = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(domEle)
    }
  }, [])

  function add() {
    setCount(count + 1)
  }
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <h3>和为：{count}</h3>
      <button onClick={add}>+1</button>
      <button onClick={unmount}>卸载组件</button>

    </div>
  )
}






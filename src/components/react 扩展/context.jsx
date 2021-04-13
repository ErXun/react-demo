import React, { Component } from 'react'
/**
 * context 组件用于祖孙组件之间的通信
 */
// 创建 Context 对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class context extends Component {
  state = {
    name: 'erxun',
    age: 18
  }
  render() {
    const { name, age } = this.state
    return (
      <div>
        <h3>我是 context 组件</h3>
        {/* <Provider value={{ name, age }}> */}
        <Provider value={{ name, age }}>
          <B />
        </Provider>
      </div>
    )
  }
}
class B extends Component {
  render() {
    return (
      <div>
        <h3>我是 B 组件</h3>
        <C />
      </div>
    )
  }
}
// class C extends Component {
//   //  声明接收 context,仅适用于类式组件
//   static contextType = MyContext

//   render() {
//     console.log(`c`, this)
//     const { name, age } = this.context
//     return (
//       <div>
//         <h3>我是 C 组件</h3>
//         姓名：<span>{name}</span>
//         年龄：<span>{age}</span>
//       </div>
//     )
//   }
// }

function C() {
  return (
    <div>
      <h3>我是 C 组件</h3>
        姓名：
      <Consumer>
        {
          value => `${value.name},年龄：${value.age}`
        }
      </Consumer>
    </div>
  )
}

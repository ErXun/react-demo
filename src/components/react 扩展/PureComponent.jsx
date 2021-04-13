import React, { Component, PureComponent } from 'react'




export default class PureComponentEx extends PureComponent {

  state = {
    age: 18,
  }

  change = () => {
    this.setState({
      age: 20
    })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(`nextProps`, nextProps)
  //   console.log(`nextState`, nextState, this.state.age)
  //   return true
  // }

  render() {
    console.log('PureComponent---render')
    return (
      <div>
        <p>年龄: <span>{this.state.age}</span></p>
        <button onClick={this.change}>change</button>
        <Child />
      </div>
    )
  }
}


class Child extends PureComponent {
  render() {
    console.log('child---render')
    return (
      <div>
        <h3>Child 组件</h3>
      </div>
    )
  }
}

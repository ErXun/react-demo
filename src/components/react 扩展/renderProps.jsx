import React, { Component } from 'react';

class RenderProps extends Component {
  render() {
    return (
      <div>
        <h3>我是 RenderProps 组件</h3>
        {/* <Parent>
          <Child />
        </Parent> */}

        <Parent render={(name) => <Child name={name} />} />
      </div>
    );
  }
}

class Parent extends Component {
  state = {
    name: 'erxun'
  }
  render() {
    const { name } = this.state
    return (
      <div>
        <h3>我是 Parent 组件</h3>
        {/* {this.props.children} */}
        {this.props.render(name)}
      </div>
    );
  }
}
class Child extends Component {
  render() {
    return (
      <div>
        <h3>我是 Child 组件： {this.props.name}</h3>
      </div>
    );
  }
}

export default RenderProps;

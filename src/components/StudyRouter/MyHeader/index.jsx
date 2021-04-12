import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class MyHeader extends Component {


  goForward = () => {
    this.props.history.goForward()
  }
  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    console.log(`MyHeader`, this.props)

    return (
      <div>
        <button onClick={this.goForward}>前进</button>
        <button onClick={this.goBack}>后退</button>
        <h1 style={{ textAlign: 'center' }}>Study Router</h1>

      </div>
    )
  }
}

export default withRouter(MyHeader)

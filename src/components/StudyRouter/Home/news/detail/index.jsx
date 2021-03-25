import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const { id, title } = this.props.match.params
    console.log(`this.props`, this.props)
    return (
      <div>
        <div>
          id:{id}
        </div>
        <div>
          title:{title}
        </div>
      </div>
    )
  }
}

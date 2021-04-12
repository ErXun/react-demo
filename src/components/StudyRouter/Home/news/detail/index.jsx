import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
  render() {
    // console.log(`this.props`, this.props)
    // const { id, title } = this.props.match.params
    // const { id, title } = qs.parse(this.props.location.search.slice(1))
    const { id, title } = this.props.location.state
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

import React, { Component } from 'react'
import axios from 'axios'

export default class Axios extends Component {

  handleAxios = () => {
    axios.get('http://localhost:3000/proxy1/server').then((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    })
  }



  render() {
    return (
      <div>
        <button onClick={this.handleAxios}>获取数据</button>
      </div>
    )
  }
}

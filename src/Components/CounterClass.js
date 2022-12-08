import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props){
        super(props)
        this.state ={
            counter : 0
        }
    }
  render() {
    return (
      <div>
        <h1>Counter Class</h1>
        <h2>You clicked {this.state.counter} times</h2>
        <button onClick={() => {this.setState({counter : this.state.counter +1 })}}>Click me</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    parentHandler(){
        alert('parent menthod alert');
    }
  render() {
    return (
      <div><Child handleClick={this.parentHandler}/></div>
    )
  }
}

export default Parent
import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
        
      this.state = {
         name:''
         
      }
      this.inputRef=React.createRef();
    }
    handleNameChange=(event)=>{
        this.setState({
            name:event.target.value
        }
        )
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
  render() {
    
    return (
      <div>
        <label>name </label>
        <input ref={this.inputRef} value={this.state.name} onChange={this.handleNameChange} />
      </div>
    )
  }
}

export default Form
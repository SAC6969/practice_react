import React, { Component } from 'react'

class Test extends Component {
    constructor(){
        super();
        this.state = {
            name: "sachin",
            add: 1,
        }
    }

    handleAdd = ()=> {
        //type one of state
        // this.setState({
        //     add : this.state.add +1
        // })

        //type two of state
        this.setState((prevState)=>{
            return{
                add : prevState.add + 1
            }
        })
    }
  render() {
    return (
      <div>
          <div>{this.state.name}</div>
          <div>{this.state.add}</div>
          <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}


export default Test
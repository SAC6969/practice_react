import React, { Component } from 'react'

class Test extends Component {
    constructor(){
        super();
        this.state = {
            name: "sachin",
            add: 1,
        }
        this.testing();
    }

    testing(){
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('done')
            },5000)
        })

        promise.then(()=>{
            this.setState({
                add: this.state.add+10
            })
            this.setState({
                add: this.state.add+10
            })
            this.setState({
                add: this.state.add+10
            })
            console.log('state',this.state);
        })
    }

    handleAdd = ()=> {
        //type one of state

        // when this.setState called more then one but render one time beacuse of batching
        this.setState({
            add : this.state.add +1
        })

        //type two of state
        // this.setState((prevState)=>{
        //     return{
        //         add : prevState.add + 1
        //     }
        // })\

    }

  render() {
    console.log('render')
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
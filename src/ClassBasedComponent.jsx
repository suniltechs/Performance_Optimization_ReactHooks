import React, { Component } from 'react'

export class ClassBasedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: 0,
            second: 100,
        }

        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleClick1() {
        this.setState({first: this.state.first + 1})
    }

    handleClick2() {
        this.setState({second: this.state.second + 1})
    }


    // Work as useEffect(() => {}, [])

    componentDidMount() {
        console.log("data received")
    }

    // Work ad useEffect(() => {}, [dependencies])

    componentDidUpdate(prevProps, prevState) {
        if(prevState.first !== this.state.first){
            console.log('First Value Changed')
        }
    }

  render() {
    return (
      <div className='usecallback-container'>
        <div className='usecallback-card'>
            <h4>Class Based Component</h4>
            <h2>First: {this.state.first}</h2>
            <h2>Second: {this.state.second}</h2>
            <button onClick={this.handleClick1}>Add First</button>
            <button onClick={this.handleClick2}>Add Second</button>
        </div>
      </div>
    )
  }
}

export default ClassBasedComponent
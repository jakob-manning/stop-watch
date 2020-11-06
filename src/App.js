import React from 'react'
import './App.css';
import StopWatch from "./StopWatch/StopWatch";

class App extends React.Component {

  componentDidMount() {
    console.log('component mounted')
  }

  render(){
    return (
        <div className="App">
        <StopWatch number={1}></StopWatch>
        <StopWatch number={2}></StopWatch>
        <StopWatch number={3}></StopWatch>
        </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import AnimalGenerator from './AnimalGenerator'

class App extends Component {
  constructor(){
    super()
    this.state = {
      generating: false
    }
    console.log("Hi from Constructor App")
  }

  componentDidMount = () => {
    console.log("Hi from componentDidMount App")
  }

  toggleGenerator = () => {
    this.state.generating ? this.setState({generating: false}) : this.setState({generating: true})
  }

  render() {
    console.log("Hi from Render App")
    const renderGenerator = this.state.generating ? <AnimalGenerator /> : null
    return (
      <div className="App">
        <div id="button" onClick={() => this.toggleGenerator()}>On / Off</div>
        {renderGenerator}
      </div>
    );
  }
}

export default App;

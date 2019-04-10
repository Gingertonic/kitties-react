import React, { Component } from 'react';
import './App.css';
import AnimalGenerator from './AnimalGenerator'
import Chat from './Chat'
import ChatThumb from './ChatThumb'

class App extends Component {
   // Lifecycle (mounting)
  constructor(){
    super()
    this.state = {
      generating: false,
      chatVisible: false
    }
    console.log("Hi from Constructor App")
  }

   // Lifecycle (mounting)
  componentDidMount = () => {
    console.log("Hi from componentDidMount App")
  }
  
   // Lifecycle (unmounting)
  // componentWillUnmount() {
  //   console.log("App Unmounted!")
  // }

   // Custom
  toggleGenerator = () => {
    this.state.generating ? this.setState({generating: false}) : this.setState({generating: true})
  }

  // Custom
  setChatVisibility = chatVisible => {
    // console.log(`changing to ${chatVisible}`)
    this.setState({ chatVisible })
  }

   // Lifecycle (mounting and updating)
  render() {
    console.log("Hi from Render App")
    const renderGenerator = this.state.generating ? <AnimalGenerator /> : null
    const renderChat = !!this.state.chatVisible ? <Chat open={this.setChatVisibility}/> : <ChatThumb open={this.setChatVisibility}/>
    return (
      <div className="App">
        <div id="button" onClick={() => this.toggleGenerator()}>On / Off</div>
        {renderGenerator}
        {renderChat}
      </div>
    );
  }
}

export default App;

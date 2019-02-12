import React, { Component } from 'react'

class AnimalFlashcard extends Component {
  constructor(props){
    super(props)
    this.state = {
      kitty: "",
      tracker: []
    }
    console.log("Hi from Constructor AnimalFlashcard")
  }

  static getDerivedStateFromProps = (props, state) => {
    if (!state.tracker.includes(props.chosenKitty)) {
      return {
        kitty: props.chosenKitty,
        tracker: [...state.tracker, props.chosenKitty]
      }
    }
    return null
  }


  shouldComponentUpdate = (nextProps, nextState) => {
    return !this.state.tracker.includes(nextState.kitty)
  }

  componentDidMount = () => {
    console.log("Hi from componentDidMount AnimalFlashcard")
  }

  render() {
    console.log("Hi from Render AnimalFlashcard")
    return (
      <div>
        <img src={this.state.kitty} alt="kitty"/>
        <h2>{this.state.tracker.length} Kitteh</h2>
      </div>
    )
  }
}

export default AnimalFlashcard

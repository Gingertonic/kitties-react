import React, { Component } from 'react'
import AnimalFlashcard from './AnimalFlashcard'


class AnimalGenerator extends Component {
  // Lifecycle (mounting)
  constructor(){
    super()
    this.state = {
      chosenKitty: "http://shirtigo.co/wp-content/uploads/2014/02/catvideos.jpg",
      kitties: [],
      counter: 0,
      current: 0,
      interval: ""
    }
    console.log("Hi from Constructor AnimalGenerator")
  }

   // Custom 
  chooseRandomKitty = () => {
    const i = Math.floor(Math.random()*10)
    console.log(i)
    const chosenKitty = this.state.kitties[i]
    const newCount =  this.state.counter + 1
    this.setState({chosenKitty: chosenKitty, counter: newCount, current: i + 1})
  }
  
  // Custom
  startKittyPicker = () => {
    const interval = setInterval(this.chooseRandomKitty, 2500)
    this.setState({interval})
  }

  // Custom
  fetchKitties = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc")
      .then(resp => resp.json())
      .then(results => results.map(k => k.url))
      .then(kitties => this.setState({kitties}))
    this.startKittyPicker()
  }

   // Lifecycle (Mounting)
  componentDidMount = () => {
    console.log("Hi from componentDidMount AnimalGenerator")
    this.fetchKitties()
  }

   // Lifecycle (unmounting)
  componentWillUnmount() {
    console.log("AnimalGenerator Unmounted!")
    clearInterval(this.state.interval)
  }

   // Lifecycle (update)
   componentDidUpdate = () => {
    console.log("Hi from componentDidUpdate AnimalGenerator")
  }

   // Lifecycle (mounting and updating)
  render(){
    console.log("Hi from Render AnimalGenerator")
    return (
      <div>
        <AnimalFlashcard chosenKitty={this.state.chosenKitty} trackingId={this.state.current}/>
        <h4>Total Rolling Counter: {this.state.counter}</h4>
        <h4>Current selected: {this.state.current}</h4>
      </div>
    )
  }
}

export default AnimalGenerator

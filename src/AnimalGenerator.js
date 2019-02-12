import React, { Component } from 'react'
import AnimalFlashcard from './AnimalFlashcard'


class AnimalGenerator extends Component {
  constructor(){
    super()
    this.state = {
      chosenKitty: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
      kitties: [],
      counter: 0,
      current: 0,
      interval: ""
    }
    console.log("Hi from Constructor AnimalGenerator")
  }

  chooseRandomKitty = () => {
    const i = Math.floor(Math.random()*10)
    console.log(i)
    const chosenKitty = this.state.kitties[i]
    const newCount =  this.state.counter + 1
    this.setState({chosenKitty: chosenKitty, counter: newCount, current: i})
  }

  startKittyPicker = () => {
    const interval = setInterval(this.chooseRandomKitty, 3000)
    this.setState({interval})
  }

  fetchKitties = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=9&page=10&order=Desc")
      .then(resp => resp.json())
      .then(results => results.map(k => k.url))
      .then(kitties => this.setState({kitties}))
    this.startKittyPicker()
  }


  componentDidMount = () => {
    console.log("Hi from componentDidMount AnimalGenerator")
    this.fetchKitties()
  }


  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  render(){
    console.log("Hi from Render AnimalGenerator")
    return (
      <div>
        <AnimalFlashcard chosenKitty={this.state.chosenKitty}/>
        <h4>Total Rolling Counter: {this.state.counter}</h4>
        <h4>Current selected: {this.state.current}</h4>
      </div>
    )
  }
}

export default AnimalGenerator

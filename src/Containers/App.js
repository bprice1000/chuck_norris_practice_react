import React, { Component } from 'react';
import Joke from '../Components/Joke'
import CatSelector from '../Components/CatSelector'
import Chuck from '../Components/Chuck'

import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
      categories: ''
    }
  }


  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(values => this.setState({ jokes: values}))
  }


  onCatChange = (event) => {
    this.setState({categories: event.target.value})
     fetch("https://api.chucknorris.io/jokes/random?category=" + event.target.value)
     .then(response => response.json())
     .then(values => this.setState({jokes: values}))

  }
  render() {
    const { jokes } = this.state;
    if (this.state.jokes.length === 0) {
      return <h1>Loading</h1>
  } else {
  return (

    <div>
        <h1 className='tc'>Chuck Norris Joke Generator</h1>
    <CatSelector catChange={this.onCatChange} />
    <Joke jokes={jokes}/>
    <Chuck />
    <p>Made by Ben the Noob</p>
    </div>

  )
  }
  }
}

export default App;

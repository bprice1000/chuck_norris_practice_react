import React from 'react';
import './Joke.css'

const Joke = ({ jokes }) => {

  return (
    <div className='joke-container '>
      <div className='front-text'>
        <h1 className=''>So you want { jokes.categories } Chuck Norris jokes, eh?</h1>
        <h6>Hover over me to laugh</h6>
      </div>
      <div className='back-text'>
       <p className=''>{ jokes.value }</p>
      </div>
    </div>
  )
}


export default Joke

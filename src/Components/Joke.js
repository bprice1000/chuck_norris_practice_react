import React from 'react';
import './Joke.css'

const Joke = ({ jokes }) => {

  return (
    <div className='joke-container grow '>
      <div className='front-text'>
        <h2 className=''>So you want { jokes.categories } Chuck Norris jokes, eh?</h2>
        <h6>Hover over me to lul</h6>
      </div>
      <div className='back-text'>
       <p className=''>{ jokes.value }</p>
      </div>
    </div>
  )
}


export default Joke

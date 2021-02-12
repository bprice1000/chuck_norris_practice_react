import React from 'react';
import './CatSelector.css'

const CatSelector = ({catChange}) => {
  return (
    <div className='catWrapper'>
    <h5 className='tc '>You may select a specific type below...</h5>
    <div className='catSelectors'>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='animal' id='animal'></input>
      <label htmlFor="animal">Animal</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='career' id='career'></input>
      <label htmlFor="career">Career</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='celebrity' id='celebrity'></input>
      <label htmlFor="celebrity">Celebrity</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='dev' id='dev'></input>
      <label htmlFor="dev">Dev</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='explicit' id='explicit'></input>
      <label htmlFor="explicit">Explicit</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='fashion' id='fashion'></input>
      <label htmlFor="fashion">Fashion</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='food' id='food'></input>
      <label htmlFor="food">Food</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='history' id='history'></input>
      <label htmlFor="history">History</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='money' id='money'></input>
      <label htmlFor="money">Money</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='movie' id='movie'></input>
      <label htmlFor="movie">Movie</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='music' id='music'></input>
      <label htmlFor="music">Music</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='political' id='political'></input>
      <label htmlFor="political">Political</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='religion' id='religion'></input>
      <label htmlFor="religion">Religion</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='science' id='science'></input>
      <label htmlFor="science">Science</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='sport' id='sport'></input>
      <label htmlFor="sport">Sport</label>
    </div>
    <div>
      <input onChange={catChange} type='radio' name='cat' value='travel' id='travel'></input>
      <label htmlFor="travel">Travel</label>
    </div>
    </div>
    </div>
  )
}

export default CatSelector;

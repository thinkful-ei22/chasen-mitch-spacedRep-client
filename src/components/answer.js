import React from 'react';
import {connect} from 'react-redux';

export function Answer(props){
  return (
    <div className='answer-component component clearfix'>
      <form className='answer-form'>
        <label>Your Answer:</label>
        <input className='user-input' type='text' placeholder='Enter your answer...'></input>
        <button className= 'answer-button' type='submit'>Submit Answer</button>
      </form>
    </div>
  )
}

export default connect()(Answer);
import React from 'react';
import {connect} from 'react-redux';

export function Instructions(props) {
  return(
    <div className='instructions'>
      <h2>HOW TO PLAY</h2>
      <ul className='instruction-list'>
        <li>Upon Login you will be given your first question</li>
        <li>Take a guess at the question and click "Submit Answer"</li>
        <li>If your answer is correct, your "Current Streak" will go up </li>
        <li>If your answer is incorrect your "Current Streak" will be reset</li>
        <li>Each question answered incorrectly will continue to show up more frequently and each correct answer will show up less to help you master data structures and algorithms</li>
        <li>Since you are logged in your progress will be automatically saved</li>
        <li></li>
        <li>We hope you enjoy learning Data Structures and Algorithms</li>
      </ul>
      <button
        type='submit'
        onClick={()=>{
          console.log('back clicked');
          // props.dispatch(backToDash());
        }}
      > 
        Back
      </button>
    </div>
  )
}

export default connect()(Instructions);
import React from 'react';
import {connect} from 'react-redux';
import {backToDash} from '../actions/questions';
import './instructions.css';


function Instructions(props) {
  return(
    <div className='instructions'>
      <h2>HOW TO PLAY</h2>
      <ul className='instruction-list'>
        <li>Upon Login you will be given your first question</li>
        <li>Take a guess at the question and click "Submit Answer"</li>
        <li>If your answer is correct, your "Progress" will increase </li>
        <li>If your answer is incorrect you will be given an answer and explanation</li>
        <li>Each question answered incorrectly will continue to show up more frequently and each correct answer will show up less to help you master data structures and algorithms</li>
        <li>Since you are logged in your progress will be automatically saved</li>
        <li>You can reset you progress and start back at the beginning by clicking the Reset button</li>
        <li></li>
        <li>We hope you enjoy learning Data Structures and Algorithms</li>
      </ul>
      <button
        className='back-btn'
        onClick={()=>{
          props.dispatch(backToDash());
        }}
      > 
        Back
      </button>
    </div>
  );
}
const mapStateToProps = state => ({
  instructions: state.questions.instructions
});

export default connect(mapStateToProps)(Instructions);
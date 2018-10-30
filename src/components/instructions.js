import React from 'react';
import {connect} from 'react-redux';
import {backToDash} from '../actions/questions';
import './instructions.css';
import './float-grid.css';


function Instructions(props) {
  return(
    <div className='instructions row'>
      <h2 className="how col-12">HOW TO PLAY</h2>
      <h4 className="instruction-list col-12">
        Upon Login you will be given your first question.
        Take a guess at the question and click "Submit Answer"
        If your answer is correct, your "Progress" will increase
        If your answer is incorrect you will be given an answer and explanation
        Each question answered incorrectly will continue to show up more frequently and each correct answer will show up less to help you master data structures and algorithms
        Since you are logged in your progress will be automatically saved
        You can reset you progress and start back at the beginning by clicking the Reset button
        
        We hope you enjoy learning Data Structures and Algorithms
      </h4>
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
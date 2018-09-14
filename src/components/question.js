import React from 'react';
import {connect} from 'react-redux';
import './question.css';

function Question(props){
  return (
    <div className='question-component component clearfix'>
      <p className='question'>{props.question.question}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  question: state.questions.question
});
export default connect(mapStateToProps)(Question);
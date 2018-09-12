import React from 'react';
import {connect} from 'react-redux';
import {sendAnswer} from '../actions/questions'

class Answer extends React.Component{
  render(){
    if(this.props.answer){
      return(
        <div className='answer-component component clearfix'>
          <div>Your answer: {this.props.userGuess}</div>
          <div>Solution:{this.props.question.answer}</div>
          <div>Explanation:{this.props.question.answerExplanation}</div>
          <button>
            NEXT
          </button>
        </div>
      )
    }else{
      return (
        <div className='answer-component component clearfix'>
          <form 
            className='answer-form'
            onSubmit={e=>{
              e.preventDefault();
              const userGuess= e.target.userAnswer.value.toLowerCase().trim();
              console.log(userGuess);
              this.props.dispatch(sendAnswer(userGuess));
              e.target.userAnswer.value ='';
            }}
          >
            <label>Your Answer:</label>
            <input className='user-input' type='text' name='userAnswer' placeholder='Enter your answer...'></input>
            <button className= 'answer-button' type='submit'>Submit Answer</button>
          </form>
        </div>
      )
    }
  };
}

const mapStateToProps= state => ({
  answer: state.questions.answer,
  question: state.questions.question,
  userGuess: state.questions.userGuess
})

export default connect(mapStateToProps)(Answer);
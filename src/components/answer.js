import React from 'react';
import {connect} from 'react-redux';
import {sendAnswer, fetchQuestion} from '../actions/questions';
import './answer.css';

class Answer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userGuess: null
    }
  }

  handleNext(){
    console.log('next clicked');
    this.props.dispatch(fetchQuestion());
  }

  render(){

    let feedback;
    if(this.props.guess){
      feedback = <p className='correct'>Correct!</p>
    }else{
      feedback = <p className='incorrect'>Incorrect</p>
    }



    if(this.props.answer){
      return(
        <div className='answer-component component clearfix'>
          {feedback}
          <p>Your answer: {this.state.userGuess}</p>  
          <p>Solution:  {this.props.question.answer}</p>  
          <p className='explanation'>Explanation: {this.props.question.explanation}</p> 
          <button className='next-btn'
            onClick={()=> this.handleNext()}
          >
            NEXT
          </button>
        </div>
      );
    }else{
      return (
        <div className='answer-component component clearfix'>
          <form 
            className='answer-form'
            onSubmit={e=>{
              e.preventDefault();
              const guess= e.target.userAnswer.value.toLowerCase().trim();
              this.setState({userGuess: guess});
              console.log(guess);
              this.props.dispatch(sendAnswer(guess));
              e.target.userAnswer.value ='';
            }}
          >
            <label>Your Answer:</label>
            <input className='user-input' type='text' name='userAnswer' placeholder='Enter your answer...'></input>
            <button className= 'answer-button' type='submit'>Submit Answer</button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps= state => ({
  answer: state.questions.answer,
  question: state.questions.question,
  guess: state.questions.guess
});

export default connect(mapStateToProps)(Answer);
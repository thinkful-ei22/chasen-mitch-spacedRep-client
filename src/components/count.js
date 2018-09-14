import React from 'react';
import {connect} from 'react-redux';
import { toggleProgress } from '../actions/questions';
import { getProgress } from '../actions/questions';

class Count extends React.Component {

  handleProgress(boolean){
    return this.props
      .dispatch(getProgress())
      .then(() => this.props.dispatch(toggleProgress(boolean)));
  }

  render(){
    const arr = this.props.userProgress.filter(index=> index === true);
    const result = arr.length/this.props.userProgress.length

    if(!this.props.progress){
      return(
        <div className='count clearfix'>
          <button 
            className='progress-btn'
            onClick={()=> this.handleProgress(true)}
          > 
            Progress 
          </button>
        </div>
      )
      
    }else{
      return(
        <div className='count clearfix'>
          <p className='progress'>{(result*100).toFixed(0)}%</p>
          <button 
            className='progress-btn'
            onClick={()=> this.handleProgress(false)}
          > 
            Progress 
          </button>
          
        </div>
      )
    }
  }
    
}

const mapStateToProps= state => ({
  user: state.questions.user,
  progress: state.questions.progress,
  userProgress: state.questions.userProgress
  
});

export default connect(mapStateToProps)(Count);
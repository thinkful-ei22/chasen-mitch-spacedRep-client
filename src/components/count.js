import React from 'react';
import {connect} from 'react-redux';
import { toggleProgress } from '../actions/questions';

class Count extends React.Component {

  handleProgress(boolean){
    this.props.dispatch(toggleProgress(boolean));
  }

  render(){
    console.log(this.props.user);  ///////not printing anything may need a dispatch to fetch the progress?/////
    if(!this.props.progress){
      return(
        <div className='count clearfix'>
          {/* ////need to add jsx to keep track currrent streak */}
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
          {/* ////need to add jsx to keep track currrent streak */}
          <p className='progress'>{this.props.guess.progress}</p>
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
  
});

export default connect(mapStateToProps)(Count);
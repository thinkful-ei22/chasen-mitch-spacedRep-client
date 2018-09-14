import React from 'react';
import {connect} from 'react-redux';
import {resetFinish, fetchQuestion} from '../actions/questions';

////need a dispatch for resting the stats///////
function Finish(props){
  return (
    <div>
      <button
        className='reset-btn'
        onClick={()=>{
          console.log('clicked');
          props.dispatch(resetFinish())}
        }
      >
        RESET
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  question: state.questions.question
});
export default connect(mapStateToProps)(Finish);
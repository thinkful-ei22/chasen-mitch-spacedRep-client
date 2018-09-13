import React from 'react';
import {connect} from 'react-redux';


////need a dispatch for resting the stats///////
function Finish(props){
  return (
    <div>
      <button>Finish</button>
    </div>
  );
}

const mapStateToProps = state => ({
  question: state.questions.question
});
export default connect(mapStateToProps)(Finish);
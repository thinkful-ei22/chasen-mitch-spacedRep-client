import React from 'react';
import {connect} from 'react-redux';

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
import React from 'react';
import {connect} from 'react-redux';

function Count(props){
  return (
    <div className='count clearfix'>
      {/* ////need to add jsx to keep track currrent streak */}
      <p>Current Streak: 0</p>
    </div>
  )
}

export default connect()(Count);
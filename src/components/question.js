import React from 'react';
import {connect} from 'react-redux';

export function Question(props){
  return (
    <div className='question-component component clearfix'>
      <p className='question'>What type of Data Structure is this?</p>
      <div className='question-img'>
        <img src='https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist.png' />
      </div>
    </div>
  )
}

export default connect()(Question);
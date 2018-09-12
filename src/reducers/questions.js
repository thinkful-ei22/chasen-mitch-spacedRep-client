import {BACK_TO_DASH, TO_INSTRUCTIONS} from '../actions/questions';
import { 
  FIND_QUESTION_REQUEST,
  FIND_QUESTION_SUCCESS,
  FIND_QUESTION_FAILURE,
  SEND_ANSWER
}  from '../actions/questions';

const initialState = {
  instructions: false,
  question:{
    question: 'what is this linked list? [head][next]->[val][next]->',
    questionDiagram: 'https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist.png',
    answer: 'linked list', 
    answerExplanation: 'this is the definition of linked list'
  },
  userGuess: '',
  answer:false,
  error: null,
  count: 0
};

export default function questionsReducer(state = initialState, action) {
  if (action.type === BACK_TO_DASH) {
    return Object.assign({}, state, {
        instructions: false
    }); 
  }else if (action.type === TO_INSTRUCTIONS) {
    return Object.assign({}, state, {
        instructions: true
    });
  }else if (action.type === SEND_ANSWER){
    console.log(action);
    return Object.assign({}, state, {
      userGuess: action.userGuess,
      answer: true
    })
  }
  return state;
}
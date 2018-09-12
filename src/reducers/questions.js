import { 
  BACK_TO_DASH,
  TO_INSTRUCTIONS,
  TOGGLE_PROGRESS,
  FIND_QUESTION_REQUEST,
  FIND_QUESTION_SUCCESS,
  FIND_QUESTION_FAILURE,
  ANSWER_REQUEST,
  ANSWER_SUCCESS,
  ANSWER_FAILURE

}  from '../actions/questions';

const initialState = {
  progress: false,
  instructions: false,
  question:{
    question: 'what is this? [head][next]->[val][next]->[val][null]',
    questionDiagram: 'https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist.png',
    answer: 'linked list', 
    answerExplanation: 'this is the definition of linked list'
  },
  userGuess: {progress: `10/12 questions`, correct: true}, ///going to have progress, and correct key boolean to determine feedback;
  answer:false,
  error: null
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
  }else if (action.type === TOGGLE_PROGRESS) {
    return Object.assign({}, state, {
        progress: action.boolean
    });
  }else if (action.type === ANSWER_REQUEST){
    return Object.assign({}, state, {
      loading: true
    });
  }else if (action.type === ANSWER_SUCCESS){
    return Object.assign({}, state, {
      loading: false,
      userGuess: action.userGuess,
      answer: true
    });
  }else if (action.type === ANSWER_FAILURE){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }else if(action.type === FIND_QUESTION_SUCCESS){
    return Object.assign({}, state, {
      question: action.question,
      answer: true,
      loading: false
    });
  }else if(action.type === FIND_QUESTION_REQUEST){
    return Object.assign({}, state, {
      loading: true,
    });
  }else if(action.type === FIND_QUESTION_FAILURE){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
}
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
  progress: false,  //tracking if progress should be displayed
  instructions: false, //tracking if instruction should be displayed
  question:{}, /// looks like==={question: "2", answer: "b", explanation: "z", id: "5b9ad03ffe4c2e1a650f896f"}
  user:{}, ////keys: created, email, head, id, progress, questions{memval, attempts, solved, _id}
  guess: {}, ///going to have progress, and correct key boolean to determine feedback;
  answer:false,  //makes answer form change to correct or incorrect feedback;
  error: null,
  loading: false
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
      guess: action.guess,
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
      answer: false,
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
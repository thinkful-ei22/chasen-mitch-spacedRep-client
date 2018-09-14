import { API_BASE_URL } from "../config";

export const TO_INSTRUCTIONS = 'TO_INSTRUCTIONS';
export const toInstructions = ()=>({
    type: TO_INSTRUCTIONS
});

export const BACK_TO_DASH= 'BACK_TO_DASH';
export const backToDash = ()=>({
    type: BACK_TO_DASH
});

export const TOGGLE_PROGRESS= 'TOGGLE_PROGRESS';
export const toggleProgress = boolean =>({
    type: TOGGLE_PROGRESS,
    boolean
});

export const GET_PROGRESS_SUCCESS= 'GET_PROGRESS_SUCCESS';
export const getProgressSuccess = userProgress =>({
    type: GET_PROGRESS_SUCCESS,
    userProgress
});

export const GET_PROGRESS_FAILURE= 'GET_PROGRESS_FAILURE';
export const getProgressFailure = error =>({
    type: GET_PROGRESS_FAILURE,
    error
});

export const ANSWER_REQUEST= 'ANSWER_REQUEST';
export const answerRequest = ()=>({
    type: ANSWER_REQUEST
});
export const ANSWER_SUCCESS= 'ANSWER_SUCCESS';
export const answerSuccess = (guess, user) =>({
    type: ANSWER_SUCCESS,
    guess,
    user
});
export const ANSWER_FAILURE= 'ANSWER_FAILURE';
export const answerFailure = error =>({
    type: ANSWER_FAILURE,
    error
});

export const FINISH_SUCCESS= 'FINISH_SUCCESS';
export const finishSuccess = reset =>({
    type: FINISH_SUCCESS,
    reset
});
export const FINISH_FAILURE= 'FINISH_FAILURE';
export const finishFailure = error =>({
    type: FINISH_FAILURE,
    error
});

// export const SEND_SUCCESS= 'SEND_SUCCESS'  ///only for front/////
// export const sendSuccess = userGuess =>({
//     type: SEND_SUCCESS,
//     userGuess   ///correct true false, progress
// });

/// sending the userAnswer when click submit///// need a response with a correct: boolean, and progress
// export const resetFinish;
export const resetFinish = () => (dispatch, getState) => {
    console.log('resetFinsh reached');
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions/reset`, {
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res =>{
        if(!res.ok){
            return Promise.reject({
                message:'Response Not Okay',
                status: res.status,
                statusText: res.statusText
            });
        }
        
        return res.json();
    })
    .then(result => {
        console.log('result from reset', result);
        return dispatch(finishSuccess(result));
    })
    .catch(err => {
        console.log('ERR', err);
        return dispatch(finishFailure(err.statusText));
    });
};

export const sendAnswer = guess => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(answerRequest());
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            guess
        })
    })
    .then(res =>{
        if(!res.ok){
            return Promise.reject({
                message:'Response Not Okay',
                status: res.status,
                statusText: res.statusText
            });
        }
        
        return res.json();
    })
    .then(result => {
        return dispatch(answerSuccess(result.feedback, result.user));
    })
    .catch(err => {
        console.log('ERR', err);
        return dispatch(answerFailure(err.statusText));
    });
};



export const FIND_QUESTION_REQUEST= 'FIND_QUESTION_REQUEST';
export const findQuestionRequest = ()=>({
    type: FIND_QUESTION_REQUEST
});
export const FIND_QUESTION_SUCCESS= 'FIND_QUESTION_SUCCESS';
export const findQuestionSuccess = question =>({
    type: FIND_QUESTION_SUCCESS,
    question
});
export const FIND_QUESTION_FAILURE= 'FIND_QUESTION_FAILURE';
export const findQuestionFailure = error =>({
    type: FIND_QUESTION_FAILURE,
    error
});

///needs to be called upon login/// needs to be called with each next button/// return a question for user

export const fetchQuestion = () => (dispatch, getState) =>{
    const authToken = getState().auth.authToken;
    dispatch(findQuestionRequest());
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers:{
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res =>{
        if(!res.ok){
            return Promise.reject({
                message:'Response Not Okay',
                status: res.status,
                statusText: res.statusText
            });
        }
        return res.json();
    })
    .then(result => {
        return dispatch(findQuestionSuccess(result));
    })
    .catch(err => {
        console.log('ERR', err);
        return dispatch(findQuestionFailure(err.statusText));
    });
};

export const getProgress = () => (dispatch, getState) =>{
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions/progress`, {
        method: 'GET',
        headers:{
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res =>{
        if(!res.ok){
            return Promise.reject({
                message:'Response Not Okay',
                status: res.status,
                statusText: res.statusText
            });
        }
        return res.json();
    })
    .then(result => {
        console.log('result from progress' , result);
        return dispatch(getProgressSuccess(result));
    })
    .catch(err => {
        console.log('ERR', err);
        return dispatch(getProgressFailure(err.statusText));
    });
};


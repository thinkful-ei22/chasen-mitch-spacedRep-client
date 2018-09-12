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

export const ANSWER_REQUEST= 'ANSWER_REQUEST';
export const answerRequest = ()=>({
    type: ANSWER_REQUEST
});
export const ANSWER_SUCCESS= 'ANSWER_SUCCESS';
export const answerSuccess = userGuess =>({
    type: ANSWER_SUCCESS,
    userGuess
});
export const ANSWER_FAILURE= 'ANSWER_FAILURE';
export const answerFailure = error =>({
    type: ANSWER_FAILURE,
    error
});

export const SEND_SUCCESS= 'SEND_SUCCESS'   ////temporary for use on front////
export const sendSuccess = userGuess =>({
    type: SEND_SUCCESS,
    userGuess   ///correct true false, progress
});

export const sendAnswer = userGuess => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(answerRequest());
    return fetch(`${API_BASE_URL}/api/answer`, {
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userGuess
        })
    })
    .then(res =>{
        if(!res.ok){
            return Promise.reject({
                message:'Response Not Okay',
                status: res.status,
                statusText: res.statusText
            })
        }
        return res.json();
    })
    .then(result => {
        return dispatch(answerSuccess(result));
    })
    .catch(err => {
        console.log('ERR', err);
        return dispatch(answerFailure(err.statusText));
    })
}



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


export const fetchQuestion = () => (dispatch, getState) =>{
    const authToken = getState().auth.authToken;
    dispatch(findQuestionRequest());
    return fetch(`${API_BASE_URL}/api/questions`, {
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
            })
        }
        return res.json();
    })
    .then(result => {
        return dispatch(findQuestionSuccess(result));
    })
    .catch(err => {
        console.log('ERR', err);
        return dispatch(findQuestionFailure(err.statusText));
    })
}
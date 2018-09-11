import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';
import {BACK_TO_DASH, TO_INSTRUCTIONS} from '../actions/questions';
const initialState = {
    data: '',
    error: null,
    instructions: true
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }else if (action.type === BACK_TO_DASH) {
        return Object.assign({}, state, {
            instructions: false
        }); 
    }else if (action.type === TO_INSTRUCTIONS) {
        return Object.assign({}, state, {
            instructions: true
        }); 
    }
    return state;
}

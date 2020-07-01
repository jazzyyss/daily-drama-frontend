import commentActionTypes from './comment.types';
const INITIAL_STATE = {
    comments: null,
    isFetching: false,
    errorMessage: undefined
}
const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case commentActionTypes.FETCH_COMMENT_START:
            return {
                ...state,
                isFetching: true
            }
        case commentActionTypes.FETCH_COMMENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                comments: action.payload
            }
        case commentActionTypes.FETCH_COMMENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}
export default commentReducer;
import { apiUrl } from '../../config.json';
import http from '../../services/httpservice';
import commentActionTypes from './comment.types';

export const fetchCommentStart = _ => ({
    type: commentActionTypes.FETCH_COMMENT_START
});

export const fetchCommentSuccess = comments => ({
    type: commentActionTypes.FETCH_COMMENT_SUCCESS,
    payload: comments
});

export const fetchCommentFailure = errorMessage => ({
    type: commentActionTypes.FETCH_COMMENT_FAILURE,
    payload: errorMessage
})

export const fetchCommentsAsync = id => {
    return async dispatch => {
        dispatch(fetchCommentStart());
        try {
            const comments = await http.get(apiUrl + 'comments?blogId=' + id);
            dispatch(fetchCommentSuccess(comments));
        } catch (er) { dispatch(fetchCommentFailure(er.message)) }
    }
}
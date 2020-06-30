import blogActiontypes from './blog.types';
import { apiUrl } from '../../config.json';
import http from '../../services/httpservice';

export const fetchBlogsStart = _ => ({
    type: blogActiontypes.FETCH_BLOGS_START
});
export const fetchBlogsSuccess = blogsMap => ({
    type: blogActiontypes.FETCH_BLOGS_SUCCESS,
    payload: blogsMap
});
export const fetchBlogsFailure = errorMessage => ({
    type: blogActiontypes.FETCH_BLOGS_FAILURE,
    payload: errorMessage
});

export const fetchBlogsAsync = _ => {
    return async dispatch => {
        dispatch(fetchBlogsStart());
        try {
            const blogs = await http.get(apiUrl + 'blog');
            dispatch(fetchBlogsSuccess(blogs));
        } catch (err) {
            dispatch(fetchBlogsFailure(err.message));
        }
    }
}
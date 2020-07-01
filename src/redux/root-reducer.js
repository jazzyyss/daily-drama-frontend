import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import blogReducer from './blog/blog.reducer';
import commentReducer from './comment/comment.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}
const rootReducer = combineReducers({
    blog: blogReducer,
    comment: commentReducer
});
export default persistReducer(persistConfig, rootReducer);
import { createSelector } from 'reselect';

const Selectcomment = state => state.comment;

export const isCommentsLoaded = createSelector(
    [Selectcomment],
    comment => !!comment.comments
)

export const fetchComments = createSelector(
    [Selectcomment],
    comment => comment.comments.data[0]
)
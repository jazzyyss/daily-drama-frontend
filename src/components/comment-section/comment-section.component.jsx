import React, { useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import http from '../../services/httpservice';
import auth from '../../services/authService';
import FormButton from '../../components/form-button/form-button.component';
import { apiUrl } from '../../config.json';
import { fetchComments } from '../../redux/comment/comment.selector';
import './comment-section.styles.scss';

const CommentSection = ({ blogId, comments }) => {
    const [commentState, setCommentState] = useState({ comment: '' });
    const { comment } = commentState;
    const handleChange = e => {
        const { value, name } = e.target;
        setCommentState({
            ...comment,
            [name]: value
        });
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const { name, email } = auth.getCurrentUser();
        try {
            const res = await http.post(apiUrl + 'comments', { blogId, name, email, comment })
            if (res.status === 200) toast.info('Comment added');
            if (res.status && res.status !== 200) toast.error('Something went wrong')
        } catch (err) {
            return err ? toast.error('Something went wrong') : null;
        }
        setCommentState({ comment: '' })
    }
    return (
        <div className="comment-section">
            <h3>Comments</h3>
            <form onSubmit={handleSubmit} className="blogpage-form">
                <textarea name="comment" value={comment} onChange={handleChange} placeholder="comment..." required></textarea>
                <FormButton commentButton type="submit" name="submit">Comment</FormButton>
            </form>
            <div className="comments">
                {
                    !comments ? null :
                        comments.comments.map(comment => (
                            <div key={comment._id} className="comment-container">
                                <h5>{comment.name}</h5>
                                <p className="comment">
                                    {comment.comment}
                                </p>
                            </div>
                        ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    comments: fetchComments
})
export default connect(mapStateToProps)(CommentSection);
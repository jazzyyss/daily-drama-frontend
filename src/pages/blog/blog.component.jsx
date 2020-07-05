import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import http from '../../services/httpservice';
import { apiUrl } from '../../config.json';
import BlogWithId from '../../components/blog-with-id/blog-with-id.component'
import CommentSection from '../../components/comment-section/comment-section.component'
import { fetchCommentsAsync } from '../../redux/comment/comment.actions';
import { isCommentsLoaded } from '../../redux/comment/comment.selector';
import './blog.styles.scss';

import withSpinner from '../../components/with-spinner/with-spinner.component';
const BlogWithIdWithSpinner = withSpinner(BlogWithId);
const CommentSectionWithSpinner = withSpinner(CommentSection);

class BlogPage extends Component {
    state = {
        blogId: this.props.match.params.blogId,
        isLoading: true,
        blog: null,
        comments: null
    }
    async componentDidMount() {
        const { fetchCommentsAsync } = this.props;
        fetchCommentsAsync(this.state.blogId);
        const { data } = await http.get(`${apiUrl}blog/${this.state.blogId}`);
        if (!data.blog) {
            return window.location = '/not-found'
        } else {
            await this.setState({ blog: data });
            this.setState({ isLoading: false });
        }
    }
    render() {
        const { isLoaded } = this.props;
        return (
            <div className="blog-page">
                <BlogWithIdWithSpinner isLoading={this.state.isLoading} blog={this.state.blog} />
                <CommentSectionWithSpinner isLoading={!isLoaded} blogId={this.state.blogId} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCommentsAsync: (blogId) => dispatch(fetchCommentsAsync(blogId))
});
const mapStateToProps = createStructuredSelector({
    isLoaded: isCommentsLoaded
});
export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
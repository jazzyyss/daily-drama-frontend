import React, { Component } from 'react';
import http from '../../services/httpservice';
import { apiUrl } from '../../config.json';
import BlogWithId from '../../components/blog-with-id/blog-with-id.component'
import CommentSection from '../../components/comment-section/comment-section.component'
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
        const { data } = await http.get(`${apiUrl}blog/${this.state.blogId}`);
        await this.setState({ blog: data });
        this.setState({ isLoading: false });
    }
    render() {

        return (
            <div className="blog-page">
                <BlogWithIdWithSpinner isLoading={this.state.isLoading} blog={this.state.blog} />
                <CommentSectionWithSpinner isLoading={this.state.isLoading} blogId={this.state.blogId} />
            </div>
        );
    }
}

export default BlogPage;
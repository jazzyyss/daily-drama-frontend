import React, { Component } from 'react';
import { apiUrl } from '../../config.json';
import http from '../../services/httpservice';
import BlogpageHeader from '../../components/blogpage-heading/blogpage-heading.component';
import BlogPreview from '../../components/blogs-preview/blogs-preview.component';

import withSpinner from '../../components/with-spinner/with-spinner.component';
const BlogPreviewWithSpinner = withSpinner(BlogPreview);

class HomePage extends Component {
    state = {
        blogs: null,
        isLoading: true
    };
    async componentDidMount() {
        const { data } = await http.get(apiUrl + 'blog');
        await this.setState({ blogs: data });
        this.setState({ isLoading: false });
    }
    render() {
        return (
            <>
                <BlogpageHeader />
                <BlogPreviewWithSpinner isLoading={this.state.isLoading} blogs={this.state.blogs} />
            </>
        );
    }
}

export default HomePage;
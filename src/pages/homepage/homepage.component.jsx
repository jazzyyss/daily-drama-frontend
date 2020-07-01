import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isBlogsLoaded } from '../../redux/blog/blog.selector';
import BlogpageHeader from '../../components/blogpage-heading/blogpage-heading.component';
import { fetchBlogsAsync } from '../../redux/blog/blog.actions';

import BlogPreview from '../../components/blogs-preview/blogs-preview.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';
const BlogPreviewWithSpinner = withSpinner(BlogPreview);
class HomePage extends Component {
    async componentDidMount() {
        const { fetchBlogsAsync } = this.props;
        await fetchBlogsAsync();
    }
    render() {
        const { isLoaded } = this.props;
        return (
            <>
                <BlogpageHeader />
                <BlogPreviewWithSpinner isLoading={!isLoaded} />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBlogsAsync: () => dispatch(fetchBlogsAsync())
})
const mapStateToProps = createStructuredSelector({
    isLoaded: isBlogsLoaded
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
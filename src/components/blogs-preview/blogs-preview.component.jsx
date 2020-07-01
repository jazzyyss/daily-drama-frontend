import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import BlogForPreview from '../blog-for-preview/blog-for-preview.component';
import { selectBlogsForPreview } from '../../redux/blog/blog.selector';
import './blogs-preview.styles.scss';

const BlogPreview = ({ blogs }) => {
    return (
        <>
            <div className="blog-preview">
                {blogs.data.map(blog =>
                    <BlogForPreview key={blog._id} id={blog.id} {...blog} />
                )}
            </div>
        </>
    );
}
const mapStateToProps = createStructuredSelector({
    blogs: selectBlogsForPreview
})
export default connect(mapStateToProps)(BlogPreview);
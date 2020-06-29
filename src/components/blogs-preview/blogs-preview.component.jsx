import React from 'react';
import './blogs-preview.styles.scss';
import BlogForPreview from '../blog-for-preview/blog-for-preview.component';

const BlogPreview = () => {
    return (
        <>
            <div className="blog-preview">
                <BlogForPreview />
                <BlogForPreview />
                <BlogForPreview />
                <BlogForPreview />
                <BlogForPreview />
                <BlogForPreview />
                <BlogForPreview />
            </div>
        </>
    );
}

export default BlogPreview;
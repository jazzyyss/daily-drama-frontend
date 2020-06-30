import React from 'react';

import BlogForPreview from '../blog-for-preview/blog-for-preview.component';
import './blogs-preview.styles.scss';



const BlogPreview = ({ blogs }) => {
    return (
        <>
            <div className="blog-preview">
                {blogs.map(blog =>
                    <BlogForPreview key={blog._id} id={blog.id} {...blog} />
                )}
            </div>
        </>
    );
}

export default BlogPreview;
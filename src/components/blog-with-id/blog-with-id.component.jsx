import React from 'react';
const BlogWithId = ({ blog }) => {
    return (
        <>
            <h1 className="blog-heading">{blog.title}</h1>
            <div className="blog-content">{blog.blog}</div>
        </>
    );
}

export default BlogWithId;
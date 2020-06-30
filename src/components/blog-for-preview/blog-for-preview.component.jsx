import React from 'react';
import { Link } from 'react-router-dom';

import './blog-for-preview.styles.scss';

const BlogForPreview = ({ _id, title, blog }) => {
    return (
        <Link to={`/blog/${_id}`} className="blog-for-preview">
            <div className="title">{title}</div>
            <div className="content">{blog}</div>
        </Link>
    );
}

export default BlogForPreview;
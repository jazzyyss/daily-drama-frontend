import React from 'react';
import BlogWithId from '../../components/blog-with-id/blog-with-id.component'
import CommentSection from '../../components/comment-section/comment-section.component'
import './blog.styles.scss';

const BlogPage = (props) => {
    const blogId = props.match.params.blogId; 
  
    console.log(blogId)
    return (
        <div className="blog-page">
            <BlogWithId />
            <CommentSection />
        </div>
    );
}

export default BlogPage;
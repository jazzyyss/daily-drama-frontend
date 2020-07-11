import React, { useState } from 'react';
import './blogpage-heading.styles.scss';
import CreateBlog from '../create-blog/create-blog.component';

const BlogpageHeader = () => {
    const [createVar, setCreateVar] = useState(false)
    const handleClick = async () => {
        setCreateVar(!createVar)
    }
    return (
        <div className="blog-header">
            <h1 className="heading">Blogs</h1>
            <div className="create-blog-option"><span onClick={() => { handleClick() }}>create</span></div>
            <CreateBlog flag={createVar} handleClick={handleClick} />
        </div>
    );
}

export default BlogpageHeader;
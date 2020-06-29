import React from 'react';
import BlogpageHeader from '../../components/blogpage-heading/blogpage-heading.component';
import BlogPreview from '../../components/blogs-preview/blogs-preview.component';

const HomePage = () => {
    return (
        <>
            <BlogpageHeader />
            <BlogPreview />
        </>
    );
}

export default HomePage;
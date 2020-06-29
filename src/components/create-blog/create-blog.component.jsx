import React, { useState } from 'react';
import FormInput from '../form-input/input.component';
import './create-blog.styles.scss';
import FormButton from '../form-button/form-button.component';

const CreateBlog = ({ flag, handleClick }) => {
    const classname = flag ? 'show' : 'hide';
    const [blogContent, setBlogContent] = useState({ title: '', blog: '' })
    const { title, blog } = blogContent;
    const handleChange = e => {
        const { value, name } = e.target;
        setBlogContent({
            ...blogContent,
            [name]: value
        })
        console.log([name], value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        handleClick();
        alert('blog posted');
    }
    return (
        <div className={`create-blog-container ${classname}`}>
            <div className="close-create-blog" onClick={handleClick}>X</div>
            <div className="create-blog" >
                <div className="title">Create a blog</div>
                <div className="blog-area">
                    <form onSubmit={handleSubmit}>
                        <textarea name="blog" value={blog} onChange={handleChange} placeholder="It's time to blog..." required></textarea>
                        <FormInput className="blog-input" type="text" name="title" handleChange={handleChange} value={title} placeholder="T i t l e..." required />
                        <FormButton className="blog-button" type="submit" name="submit">BLOG</FormButton>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
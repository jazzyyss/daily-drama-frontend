import React, { useState } from 'react';
import { toast } from "react-toastify";
import http from '../../services/httpservice';
import FormInput from '../form-input/input.component';
import FormButton from '../form-button/form-button.component';
import { apiUrl } from '../../config.json';
import './create-blog.styles.scss';
import auth from '../../services/authService';

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
    }
    const handleSubmit = async e => {
        e.preventDefault();
        handleClick();
        try {
            const { name, email } = await auth.getCurrentUser();
            const res = await http.post(apiUrl + 'blog', { blogContent, name, email });
            console.log(res);
            if (res.status === 200) toast.info('Blog added');
            if (res.status && res.status !== 200) toast.error('Something went wrong')
        } catch (err) {
            return err ? toast.error('Something went wrong') : null;
        }
        setBlogContent({
            ...blogContent,
            title: '',
            blog: ''
        });
    }
    return (
        <div className={`create-blog-container ${classname}`}>
            <div className="close-create-blog" onClick={handleClick}>X</div>
            <div className="create-blog" >
                <div className="title">Create a blog</div>
                <div className="blog-area">
                    <form onSubmit={handleSubmit}>
                        <textarea name="blog" value={blog} onChange={handleChange} placeholder="It's time to blog..." required></textarea>
                        <FormInput className="blog-input" type="text" name="title" handleChange={handleChange} value={title} placeholder="Title..." required />
                        <FormButton className="blog-button" type="submit" name="submit">BLOG</FormButton>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
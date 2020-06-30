import React,{useState} from 'react';
import FormButton from '../../components/form-button/form-button.component';
import './comment-section.styles.scss';

const CommentSection = () => {
      const [commentState,setCommentState] = useState({comment:''});
    const {comment} = commentState;
    const handleChange = e =>{
        const {value,name} = e.target;
        setCommentState({
            ...comment,
            [name]:value
        });
    }
    const handleSubmit = e =>{
        e.preventDefault();
        alert('comment inserted');
    }
    return (
        <div className="comment-section">
            <h3>Comments</h3>
            <form onSubmit={handleSubmit} className="blogpage-form">
                <textarea name="comment" value={comment} onChange={handleChange} placeholder="comment..." required></textarea>
                <FormButton commentButton type="submit" name="submit">Comment</FormButton>
            </form>
            <div className="comments">
                <div className="comment-container">
                    <h5>Jaspreet</h5>
                    <p className="comment">
                        volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas era
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default CommentSection;
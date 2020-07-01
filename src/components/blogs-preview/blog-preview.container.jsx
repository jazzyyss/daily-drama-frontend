import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isBlogFetching } from '../../redux/blog/blog.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import BlogPreview from './blogs-preview.component';
const mapStateToProps = createStructuredSelector({
    isLoading: isBlogFetching
})
const BlogPreviewContainer = connect(mapStateToProps)(WithSpinner(BlogPreview));
export default BlogPreviewContainer;
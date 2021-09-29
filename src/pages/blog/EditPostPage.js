import React from 'react';
import _ from 'lodash';
import { fetchPost, editPost } from '../../actions';
import { connect} from 'react-redux';
import PostPreview from "../../components/PostPreview";
import PostForm from '../../components/PostForm';


class EditPostPage extends React.Component {
    state = {
        postUpdated: false,
    };

    componentDidMount() {    
        this.props.fetchPost(this.props.pageId);
        
    }
   
    onSubmit = formValues => {
        this.props.editPost(this.props.pageId, formValues);   
    }
    renderPost() {
        if(this.props.post) {
            return (
                <PostPreview title={this.props.post.title} 
                        content={this.props.post.post_text}>
                </PostPreview>
            );
        } else {
            return <div>Loading post...</div> ;
        }
    }
    render() {
        return (
        <div>
            <h3>Edit Post</h3>
            <PostForm initialValues={_.pick(this.props.post, 'title', 'post_text')} 
            onSubmit={this.onSubmit} />
            
        </div>);
    }


}
const mapStateToProps = (state, props) => {
    return {
        pageId: props.match.params.id,
        post: state.posts[props.match.params.id]
    };
}

export default connect(mapStateToProps, {fetchPost, editPost})(EditPostPage);
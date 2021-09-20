import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions';
import PostForm from '../../components/PostForm';


class CreatePostPage extends React.Component {

    onSubmit = (formValues)=> {
        this.props.createPost(formValues);
    }

    render() {
        return (
            <div className="container mt-2 mb-2">
                <h3 className="lead">Create a Post</h3>
                <PostForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createPost })(CreatePostPage);
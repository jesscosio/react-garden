import React from 'react';
import styled from 'styled-components';

class PostPreview extends React.Component {

    render() {
        return (
        <PostContainer>
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
        </PostContainer>);
    }
}

export default PostPreview;

const PostContainer = styled.div`
  height: 30vh;
  padding: 1em;
`;
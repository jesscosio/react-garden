import React from 'react';
import styled from 'styled-components';

class Post extends React.Component {

    render() {
        return (
        <PostContainer>
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
        </PostContainer>);
    }
}

export default Post;

const PostContainer = styled.div`
  width: 100vw;
  height: 30vh;
  padding: 1em;
`;
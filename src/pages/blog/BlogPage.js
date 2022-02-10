import React from 'react';
import Nav from '../../components/Nav';
import { fetchPosts } from '../../actions';
import { connect } from 'react-redux';
import PostPreview from '../../components/PostPreview';
import { Link } from 'react-router-dom';
import history from '../../history';


class BlogPage extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    handlePostClick(id) {
        history.push(`/blog/post/${id}`);
    }

    renderAdmin(post) {
        if(post.user_id === this.props.currentUserId) {
            const newID = (post.id).toString() + "link";
            return (
                <Link style={{margin:"1em"}} key={newID} to={`/blog/edit/${post.id}`} tabIndex="0" className="ui button">
                    Edit
                </Link>
            );
        }
    }
    
    renderList() {
        return (this.props.posts).map( post => {
            return (
                <Link key={post.id}  style={{textDecoration:"none", color:"black"}} to={`/blog/post/${post.id}`} >
                    
                    <PostPreview title={post.title} 
                        content={post.post_text}  >
                    </PostPreview>
                    {this.renderAdmin(post)}
                </Link>
            
        )});
    }

    render() {
        if(!this.props.posts) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Nav tab={{name:"Blog",value:"blog", path:"/blog"}}/>
                <div className="container pt-2">
                    {this.renderList()}
                </div>
                
            </div>
        );
    };

}

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchPosts})(BlogPage);
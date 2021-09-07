import React from 'react';
import Nav from '../../components/Nav';
import { fetchPosts } from '../../actions';
import { connect } from 'react-redux';
import Post from '../../components/Post';
import { Link } from 'react-router-dom';


class BlogPage extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
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
                <div key={post.id}>
                    <Post title={post.title} 
                        content={post.post_text}>
                    </Post>
                    {this.renderAdmin(post)}
                </div>
            
        )});
    }

    render() {
        if(!this.props.posts) {
            return <div>Loading...</div>;
        }
        return (
            <div className="ui ">
                <Nav tab={{name:"Blog",value:"blog", path:"/blog"}}/>
                {this.renderList()}
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
import posts from '../apis/posts';
import history from '../history';

export const SelectActiveTab = (activeTab) => {
    return {
        type: 'SELECT_ACTIVE_TAB',
        payload: activeTab
    };
};

export const fetchPost = (id) => async dispatch => {
    const response = await posts.get(`/posts/${id}`);
    dispatch({type:'FETCH_POST', payload: response.data});
};

export const fetchPosts = () => async dispatch => {
    const response = await posts.get('/posts/');
    dispatch({type:'FETCH_POSTS', payload: response.data});
};
export const editPost = (id, formValues) => async dispatch => {
    const response = await posts.patch(`/posts/${id}/`, formValues);
    dispatch({type:'EDIT_POST', payload: response.data});

    history.push(`/edit-success/${id}`)
};

export const signIn = (userId)=> {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};

export const signOut = ()=> {
    return {
        type: 'SIGN_OUT',
        
    }
};
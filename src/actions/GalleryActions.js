import history from '../history';
import gallery from '../apis/gallery';

export const fetchGallery = () => async dispatch => {
    const response = await gallery.get('/gallery/');
    dispatch({type:'FETCH_GALLERY', payload: response.data});
};

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import galleryReducer from './galleryReducer';
import { reducer as formReducer} from 'redux-form';

export const selectedTabReducer = (activeTab={}, action) => {
    switch(action.type) {
        case 'SELECT_ACTIVE_TAB':
            return action.payload;
        default:
            return activeTab;
    }
};

export const tabsReducer = () => {
    return [
        { name: "Home", value: "home", path: "/"},
        { name: "About", value: "about", path: "/about"},
        { name: "Blog", value: "blog", path: "/blog"},
        { name: "Gallery", value: "gallery", path: "/gallery"},
        { name: "Pay by Venmo", value: "venmo", path: "/venmo"}
    ];
};

export default combineReducers({
    activeTab: selectedTabReducer,
    tabs: tabsReducer,
    gallery: galleryReducer,
    posts: postReducer,
    auth: authReducer,
    form: formReducer
});
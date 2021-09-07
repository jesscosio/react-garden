import _ from 'lodash';

const galleryReducer = (state={}, action) => {
    switch(action.type){
        case 'FETCH_GALLERY':
            return { ...state, ..._.mapKeys(action.payload)}
        default: 
            return state;
    }
};

export default galleryReducer;
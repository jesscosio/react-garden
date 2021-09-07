import _ from 'lodash';

const postReducer = (state={}, action) => {
    switch(action.type){
        case 'EDIT_POST':
            return {...state, [action.payload.id]: action.payload };
        case 'FETCH_POST':
            return {...state, [action.payload.id]: action.payload };
        case 'CREATE_POST':
            return {...state, [action.payload.id]: action.payload };
        case 'FETCH_POSTS':
            return { ...state, ..._.mapKeys(action.payload, 'id')}
        case 'DELETE_POST':
            return _.omit(state, action.payload);
        default: 
            return state;
    }
};

export default postReducer;
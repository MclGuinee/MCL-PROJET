import * as t from './deliveryActionTypes';

let initialState = {
    delivery: ''
};

const deliveryReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.ADD_DELIVERY: {
            state = Object.assign({}, state, { delivery: action.delivery/*, error:action.error*/ });
            return state;
        }

        // case t.LOGGED_OUT: {
        //     return {...state, quotes: []};
        // }

        default:
            return state;
    }
};

export default deliveryReducer;
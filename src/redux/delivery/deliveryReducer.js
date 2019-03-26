import * as t from './deliveryActionTypes';

let initialState = {
    delivery: ''
};

const deliveryReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.ORDER: {
            let { delivery } = action;
            return {...state, delivery};
        }

        // case t.LOGGED_OUT: {
        //     return {...state, quotes: []};
        // }

        default:
            return state;
    }
};

export default deliveryReducer;
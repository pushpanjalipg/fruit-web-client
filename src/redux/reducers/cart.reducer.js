import {
    GET_CART_SUCCESS
} from "../constants/cart.constant";

const initialState = {
    cartItem: (() => {
        try {
            const stored = localStorage.getItem('cartItem');
            return stored ? JSON.parse(stored) : {
                customer: {},
                items: [],
                subTotal: 0,
                tax: 0,
                grandTotal: 0,
                orderPlaced: false
            };
        } catch (error) {
            return {
                customer: {},
                items: [],
                subTotal: 0,
                tax: 0,
                grandTotal: 0,
                orderPlaced: false
            };
        }
    })()
};


export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_SUCCESS:
            
            localStorage.setItem('cartItem', JSON.stringify(action.payload))
            return {
                ...state,
                cartItem: {
                    ...action.payload
                }
            };


        default:
            return state;
    }
}
import { FETCH_POSTS, NEW_POST, ADD_TO_CART, REMOVE_POST, GET_SINGLE_PRODUCT, GET_QUANTITY, USER_AUTHENTICATION } from '../actions/types';


const initialState = {

    items: [],
    item: {},
    cart: [],
    description: {},
    quantity: 1,
    addedIds: [],
    itemremoved: [],
    totalPrice: [],
    cartPrices: [],
    cartCounter: 0,
    username: 'muddabir',
    password: 'chohan'

};


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }

        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }

        case ADD_TO_CART:

            console.log(state.totalPrice);


            return {
                ...state,
                cart: [...state.cart, action.mycart],
                addedIds: [...state.addedIds, action.mycart._id],
                totalPrice: [...state.cartPrices, action.mycart.price],
                cartCounter: state.cartCounter + 1
            }


        case GET_SINGLE_PRODUCT:
            console.log(action.obj);
            return {
                ...state,
                description: action.obj
            }
            break;


        case REMOVE_POST:
            return {
                ...state,
                cart: state.cart.filter(item => item !== action.object),
                cartCounter: state.cartCounter - 1
            }

        case GET_QUANTITY:
            return {
                ...state,
                quantity: action.myquantity,
                id: action.myid
            }

        case USER_AUTHENTICATION:
        return {
                ...state,
                username: action.name,
                password: action.password
        }

        default:
            return state;
    }
}
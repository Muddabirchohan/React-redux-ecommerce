import { FETCH_POSTS, NEW_POST, GET_SINGLE_PRODUCT, ADD_TO_CART,REMOVE_POST, GET_QUANTITY ,USER_AUTHENTICATION} from './types';
import Posts from '../Components/Posts';
import { bindActionCreators } from 'redux';


export const fetchPosts = () => dispatch => {
    fetch('https://greencommunitylaundry.herokuapp.com/api/products')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}


export const getSingleProduct = (id) => dispatch => {

    dispatch({
        type: GET_SINGLE_PRODUCT,
        obj: id
    })
}


export const addToCart = (product, id) => dispatch => {
// console.log(product)
    dispatch({
        type: ADD_TO_CART,
        mycart: product,
        addedId: id   
    })
}


export const removeFromCart = (obj)=> dispatch => {
    dispatch({
       type: REMOVE_POST,
        object: obj
    })
}


export const getQuantity = (obj)=> dispatch => {

    dispatch({
        type: GET_QUANTITY,
        myid: obj._id,
        myquantity: obj.price
    })
}


export const userAuthentication =(username,upassword)=> dispatch => {

    dispatch({
        type: USER_AUTHENTICATION,
        name: username,
        password: upassword
    })
}





export const createPosts = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
}



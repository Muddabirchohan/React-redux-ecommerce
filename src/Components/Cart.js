import React, { Component } from 'react';
import '../App.css';
import { Provider } from 'react-redux';
import '../assets/react-toolbox/theme.css';
import theme from '../assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import { connect } from 'react-redux';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import { Link } from 'react-router-dom';
import Input from 'react-toolbox/lib/input';
import {removeFromCart,getQuantity} from '../actions/PostActions';
import Button from 'react-toolbox/lib/button/Button';
import '../App.css';


class Cart extends React.Component {
constructor(){
    super();
    this.state = {
        prices: 0,
        total: 0,
        arrayTotal: [0]
    }
}


getQuantity(obj,val){
    let {prices, total,arrayTotal} = this.state; 
    total = obj.price*val;
//    arrayTotal.push(total);
//    arrayTotal.shift(); 
    this.setState({ [obj._id]: val, total }) 
    console.log("objprice",obj.price,"val",val,"total",total);

}




    
    render() {
        console.log(this.props.totalPrice)
        return (

            <ThemeProvider theme={theme}>

                <div>
                    <AppBar title='React-Redux' leftIcon='menu' >
                        <Link to="/home" >  Home  </Link>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                        
                        <div style={{fontSize:'28px'}}> {this.props.cartCounter} </div> 
                    </AppBar>

        
                    <div className="cardAllign">
                        <table>
                            <h2> Cart Items </h2> 
                            <tr>
                                {this.props.cart.map((obj,index) => {
                                    return (
                                        <div   >
                                            <td> {<img src={`https://greencommunitylaundry.herokuapp.com/api/Images/${obj.image}`} width="25%" />} </td>
                                            <td> {obj.name} </td>
                                            <td> {obj.price} </td>
                                            <td>  <Input type="number" value={this.state.price} onChange={this.getQuantity.bind(this, obj)}>  </Input> { this.state[`${obj._id}`] ? obj.price*this.state[`${obj._id}`] : 0}  </td>
                                            <td> <Button flat primary onClick={ ()=> this.props.removeFromCart(obj)}> Remove  </Button> </td>        
                                     </div>
                                    )
                                })}
                            </tr>
                        </table>
                        <br/> <br/> 
                      <div style={{marginLeft: '550px'}}> {this.state.total} </div> 
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.posts.cart,
        quantity: state.posts.quantity,
        totalPrice: state.posts.totalPrice,
        cartCounter: state.posts.cartCounter
    }
}


export default connect(mapStateToProps,{removeFromCart,getQuantity})(Cart);
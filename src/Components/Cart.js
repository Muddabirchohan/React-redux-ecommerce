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
import { removeFromCart, getQuantity } from '../actions/PostActions';
import Button from 'react-toolbox/lib/button/Button';
import '../App.css';
import Table from 'react-bootstrap/lib/Table';
import shop from '../images/shop.png';


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            prices: 0,
            total: 0,
            arrayTotal: [0]
        }
    }


    getQuantity(obj, val) {
        let { prices, total, arrayTotal } = this.state;
        total = obj.price * val;
        //    arrayTotal.push(total);
        //    arrayTotal.shift(); 
        this.setState({ [obj._id]: val, total })
        console.log("objprice", obj.price, "val", val, "total", total);

    }





    render() {
        console.log(this.props.totalPrice)
        return (

            <ThemeProvider theme={theme}>

                <div>
                    <AppBar>

                        <Link to="/home" style={{ marginLeft: '1150px' }}> Home </Link>
                        <Link to="/cart" style={{ marginLeft: '30px' }}>
                            {/* <img src={cart} height="50px"/> */}
                            <img src={shop} />
                        </Link>
                        <div style={{ fontSize: '28px', marginLeft: '5px' }} > {this.props.cartCounter} </div>
                    </AppBar>


                    <div className="cardAllign">
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.cart.map((obj, index) => {
                                    return (
                                        <tr>
                                            <td> {<img src={`https://greencommunitylaundry.herokuapp.com/api/Images/${obj.image}`} width="25%" />} </td>
                                            <td> {obj.name} </td>
                                            <td> {obj.price} </td>
                                            <td>  <Input type="number" value={this.state.price} onChange={this.getQuantity.bind(this, obj)}>  </Input> {this.state[`${obj._id}`] ? obj.price * this.state[`${obj._id}`] : 0}  </td>
                                            <td> <Button flat primary onClick={() => this.props.removeFromCart(obj)}> Remove  </Button> </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                        <br /> <br />
                        <div style={{ marginLeft: '550px' }}> {this.state.total} </div>
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


export default connect(mapStateToProps, { removeFromCart, getQuantity })(Cart);
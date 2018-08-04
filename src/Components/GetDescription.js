import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/react-toolbox/theme.css';
import theme from '../assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import { Card } from 'react-toolbox/lib/card';
import { Link } from 'react-router-dom';
import {  addToCart } from '../actions/PostActions';
import '../App.css';
import shop from '../images/shop.png';
import Button from 'react-bootstrap/lib/Button';



class GetDescription extends Component {

    addCart(post, id) {
        let { addedIds, addToCart } = this.props;
        if (addedIds.includes(id)) {
            alert('already exist')
        } else addToCart(post, id)
    }


    render() {
        console.log(this.props.description);
        const { description } = this.props;
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


                    <div className="row">
                        <div className="column">
                            <Card style={{ width: '450px', marginTop: '50px' }}>
                                <div>
                                    <p>  <h2>  {description._id} </h2> </p>
                                    <p>  <img src={`https://greencommunitylaundry.herokuapp.com/api/Images/${description.image}`} width="100%" /> </p>
                                </div>
                            </Card>
                        </div>
                        <div className="column">
                            <Card style={{ width: '450px', marginTop: '50px', paddingLeft: '10px' }}>
                                <p> ID: <h3>  {description._id} </h3> </p>
                                <p> Name: <h3> {description.name} </h3> </p>
                                <p> Price: <h3> {description.price} </h3> </p>
                            </Card>
                            <br/>
                         
                        </div>
                    </div>
                    <br/>
                    <Button style={{marginLeft: '600px'}} bsStyle="success" onClick={() => this.addCart(description, description._id)}  > Add to Cart  </Button>
                </div>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    description: state.posts.description,
    cartCounter: state.posts.cartCounter,
    addedIds: state.posts.addedIds,
})

export default connect(mapStateToProps, { addToCart })(GetDescription);

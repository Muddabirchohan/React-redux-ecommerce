import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/react-toolbox/theme.css';
import theme from '../assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button, IconButton } from 'react-toolbox/lib/button/Button';
import { Link } from 'react-router-dom';
import '../App.css';

class GetDescription extends Component {


    render() {
        console.log(this.props.description);
        const { description } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <AppBar title='React-Redux' leftIcon='menu' >
                        <Link to="/home"> Home  </Link>
                        <Link to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                        </Link>
                       <div style={{fontSize:'28px'}}>  {this.props.cartCounter} </div> 
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
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    description: state.posts.description,
    cartCounter: state.posts.cartCounter
})

export default connect(mapStateToProps)(GetDescription);

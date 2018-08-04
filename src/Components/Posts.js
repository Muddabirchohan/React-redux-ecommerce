import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts,getSingleProduct,addToCart,userAuthentication } from '../actions/PostActions';
import '../assets/react-toolbox/theme.css';
import theme from '../assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import {Link} from 'react-router-dom';
import Input from 'react-toolbox/lib/input';
import shop from '../images/shop.png';

import '../App.css';
import Dialog from 'react-toolbox/lib/dialog/Dialog';


class Posts extends Component {
constructor(){
    super();
    this.state = {
        name: '',
        email: '',
        password: ''
    }
}


     componentDidMount(){
        this.props.fetchPosts();
    }
  
    state = {
        active: false
      };
    
      handleToggle = () => {
        this.setState({active: !this.state.active});
      }
    
      actions = [
        { label: "Cancel", onClick: this.handleToggle },
        { label: "Save", onClick: this.handleToggle }
      ];

  
      addCart(post, id){
        let {addedIds, addToCart} = this.props;
         if(addedIds.includes(id)){
             alert('already exist')
         }else addToCart(post, id)
     }

     getName(e){
         
         console.log(e.innerRef)
        // this.setState({name: e.target.value});
     }

     getPas(e) {
        this.setState({password: e.target.value});
     }
     getEmail(e) {
        this.setState({email: e.target.value});
     }




    render() {
        let {name,email,password} = this.state;
        console.log("name",name,"email",email,"password",password)
// console.log(this.props.addedIds);
const { open } = this.state;


        return (
<ThemeProvider theme={theme}>
<div > 
<AppBar>   



<Link to="/home" style={{marginLeft: '1150px'}}> Home </Link> 

<Link to="/cart" style={{marginLeft: '30px'}}>
{/* <img src={cart} height="50px"/> */}
    <img src={shop} />
    </Link>
   
    <div style={{fontSize:'28px',marginLeft: '5px'}} > {this.props.cartCounter} </div> 
    </AppBar>
    


    <div>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
        >


          <form onSubmit={this.props.userAuthentication()}> 
          FirstName:  <Input  type="text" innerRef={(Input) => { this.state.itemInput = Input; }} value={this.state.fname} onChange={this.getName}> </Input>
          Email:  <Input type="text" value={this.state.email} onChange={this.getEmail}> </Input>
          Password: <Input type="password" value={this.state.password} onChange={this.getPas}> </Input>
          <input type="submit"/>
          </form> 
        </Dialog>
      </div>

<div className="cardAllign">    
{this.props.cart.map(post => {
            return (
                <Card style={{ width: '320px', height: '310px', marginLeft: '50px', marginTop: '30px'}}>              
                        <div key={post._id} >
                        <p>  <img src={`https://greencommunitylaundry.herokuapp.com/api/Images/${post.image}`} style={{height: '190px',borderRadius: '5px',}} width="100%" /> </p> 
                        <h5 style={{ marginLeft: '130px'}}> {post.name} </h5>
                        <p style={{marginLeft: '100px'}}> <Button onClick={()=> this.addCart(post, post._id)} flat primary> Add To Cart </Button> </p>
                    <Link to="/products" onClick={()=> this.props.getSingleProduct(post,post._id)}> <Button raised primary icon='bookmark'>  details </Button> </Link>
                    </div>
                </Card>
            )
        })
    }
        </div> 

    
        </div>
</ThemeProvider>


        );
    }
}

Posts.propTypes = {

    fetchPosts: propTypes.func.isRequired,
    posts:      propTypes.array.isRequired,
    newPost:    propTypes.object

}


const mapStateToProps = state => ({

    posts: state.posts.items,
    newPost: state.posts.item,
    cart: state.posts.items,
    addedIds: state.posts.addedIds,
    cartCounter: state.posts.cartCounter,
    userValidation: state.posts.userValidation

})



export default connect(mapStateToProps, {fetchPosts,getSingleProduct,addToCart,userAuthentication})(Posts);

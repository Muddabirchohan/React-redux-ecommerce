import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts';
import PostsForm from './Components/PostsForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import store from './Store';
import GetDescription from './Components/GetDescription';
import Modal from 'react-responsive-modal';
import Input from 'react-toolbox/lib/input';

class App extends Component {
 
 
  render() {
    return (
      <div>
      <Posts />
      </div>
    );
  }
}

export default App;

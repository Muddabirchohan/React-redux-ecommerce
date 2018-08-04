import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux';
import { BrowserRouter , Switch ,Route} from 'react-router-dom';
import GetDescription from './Components/GetDescription';
import store from './Store'
import Posts from './Components/Posts';
import Cart from './Components/Cart';
import Login from './Components/Login';

ReactDOM.render(
<Provider store={store}>
<BrowserRouter >
    <Switch> 
    <Route path="/home" component={App} exact={true}> </Route>
    <Route path="/products" component={GetDescription}> </Route>
    <Route path="/cart" component={Cart}> </Route>
    {/* <Route path="/home" component={Posts}> </Route> */}
    </Switch>
    </BrowserRouter>
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();

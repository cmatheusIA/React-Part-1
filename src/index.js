import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Livro from './Livro';
import Autor from './Autor';
import Sobre from './Sobre';
import NotFound from './NotFound';

import {BrowserRouter, Switch,Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}></Route>
            <Route path="/livros" component={Livro}></Route>
            <Route path="/sobre" component={Sobre}/>
            <Route path="/autor" component={Autor}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

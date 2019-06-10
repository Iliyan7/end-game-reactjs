import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Content from './components/Content';
import NotFound from './components/shared/NotFound';
import ServerError from './components/shared/ServerError';
import * as serviceWorker from './serviceWorker';
import stores from "./stores/index";
import './styles/styles.css';

const App = () => (
    <Router>
        <Switch>
            <Route exact path='/' render={() => (<Redirect to="/v1/" />)} />
            <Route path='/v1' component={Content} />
            <Route path='/error' component={ServerError} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render((
    <Provider {...stores} >
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

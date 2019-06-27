import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Content from './components/content';
import NotFound from './components/shared/not-found';
import ServerError from './components/shared/server-error';
import * as serviceWorker from './serviceWorker';
import RootStore from "./stores/root-store";
import './styles/styles.css';

const App = () => (
    <Provider rootStore={new RootStore()} >
        <Router>
            <Switch>
                <Route exact path='/' render={() => (<Redirect to="/v1/" />)} />
                <Route path='/v1' component={Content} />
                <Route path='/error' component={ServerError} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>
)

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

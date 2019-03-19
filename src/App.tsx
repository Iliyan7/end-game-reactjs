import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './home/Home';
import Games from './games/Games';
import Reviews from './reviews/Reviews';
import News from './news/News';
import Contact from './contact/Contact';
import Login from './auth/Login';
import Register from './auth/Register';
import NotFound  from './shared/NotFound';

class App extends React.Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/games' component={Games} />
            <Route path='/reviews' component={Reviews} />
            <Route path='/news' component={News} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route component={NotFound} />
          </Switch>
        </Router>
    );
  }
}

export default App;

import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Games from './components/games/Games'
import Reviews from './components/reviews/Reviews';
import News from './components/news/News';
import Contact from './components/contact/Contact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/shared/NotFound';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Newsletter from './components/shared/Newsletter';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/games' component={Games} />
          <Route path='/reviews' component={Reviews} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Newsletter/>
        <Footer />
      </Router>
    );
  }
}

export default App;

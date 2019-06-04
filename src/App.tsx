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
import GameDetails from './components/game-details/GameDetails';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/games' component={Games} />
          <Route exact path='/games/:id/details' component={GameDetails} />
          <Route exact path='/reviews' component={Reviews} />
          <Route exact path='/news' component={News} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Newsletter />
        <Footer />
      </Router>
    );
  }
}

export default App;

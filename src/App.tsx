import * as React from 'react';
import './App.css';
import { Home } from './home/Home';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
  basename: '/'
});

class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Route path='/' exact component={Home} />
      </Router>
    );
  }
}

export default App;

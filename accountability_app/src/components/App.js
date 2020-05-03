import React from 'react';
import { Switch, BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';

// import List from './components/List.jsx';
import Home from './home/index'
import Login from './login/index'

const App = () => {
  return (
    <Router history={hashHistory}>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App; 
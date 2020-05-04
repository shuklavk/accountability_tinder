import React from 'react';
import { Switch, BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
// import List from './components/List.jsx';
import Home from './home/index'
import Login from './login/index'
import Register from './registration/register'

const client = new ApolloClient({
  dataIdFromObject: o => o.id
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Register} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App; 
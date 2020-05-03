import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// import List from './components/List.jsx';
import Home from './home/index'
import Login from './login/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
  }

  render () {
    return (<Router>
      <div>
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
      </div>
    </Router>)
  }
}

export default App;
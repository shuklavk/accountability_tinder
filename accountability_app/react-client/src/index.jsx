import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom'; 
import $ from 'jquery';
import List from './components/List.jsx';
import Home from './components/home/index.js'

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
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, 
  <Router>
    <Route path = "/home" component = {Home} />
  </Router>,
  document.getElementById('app'));
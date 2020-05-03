import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Home from './components/Home'
import { BrowserRouter} from "react-router-dom";
import { Route, Switch } from "react-router";
const Controller = () => (
  <Switch>
    <Route exact path={`/`} component={App} />
    <Route exact path={'/home'} component={ Home} />
  </Switch>
);

ReactDOM.render(<BrowserRouter>
  <Controller></Controller>
  </BrowserRouter>, document.getElementById('app'));
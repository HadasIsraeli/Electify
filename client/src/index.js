import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
// import history from './history';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
// import LoginApp from './LoginApp';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {/* <Route path='/' component={LoginApp} /> */}
      <Route exact path='/' component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();

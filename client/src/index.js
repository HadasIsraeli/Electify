import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
// import history from './history';
import './index.css';
import App from './App';
import Blocks from './components/Blocks';
import reportWebVitals from './reportWebVitals';
// import { render } from 'react-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/' component={Blocks} />
      </Switch>
    </Router>,
  document.getElementById('root')
);

// render(
//   <BrowserRouter history={history}>
//     <Switch>
//       <Route path='/' component={App} />
//       <Route path='/' component={Blocks} />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

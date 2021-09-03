import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BlockApp from './components/BlockApp';
import Blocks from './components/Blocks';
import ConductTransaction from './components/ConductTransaction';
import TransactionPool from './components/TransactionPool';
import CountVotes from './components/CountVotes';
import BarChart from './components/BarChart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/BlockApp' component={BlockApp} />
            <Route exact path='/Blocks' component={Blocks} />
            <Route exact path='/conduct-transaction' component={ConductTransaction} />
            <Route exact path='/transaction-pool' component={TransactionPool} />
            <Route exact path='/CountVotes' component={CountVotes} />
            <Route exact path='/BarChart' component={BarChart} />
            <Route exact path='/Home' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
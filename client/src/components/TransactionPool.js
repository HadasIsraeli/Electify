import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import Transaction from './Transaction';
import { NavLink } from 'react-router-dom';
// import history from '../history';

const POLL_INERVAL_MS = 10000;
class TransactionPool extends Component {
    state = { transactionPoolMap: {} };

    fetchTransactionPoolMap = () => {
        fetch(`http://localhost:3000/api/transaction-pool-map`)
            .then(response => response.json())
            .then(json => this.setState({ transactionPoolMap: json }));
    }

    componentDidMount() {
        this.fetchTransactionPoolMap();

        this.fetchPoolMapInterval = setInterval(
            () => this.fetchTransactionPoolMap(),
            POLL_INERVAL_MS
        );
    }

    componentWillUnmount() {
        clearInterval(this.fetchPoolMapInterval);
    }

    render() {
        return (
            <div className='TransactionPool'>
                <div>
                    <nav className="nav-wrapper blue darken-9">
                        <div className="container">
                            <ul className="right">
                                <li><NavLink to="/BlockApp">Blockchain</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <h3>Transaction Pool</h3>
                {
                    Object.values(this.state.transactionPoolMap).map(transaction => {
                        return (
                            <div key={transaction.id}>
                                <hr />
                                <Transaction transaction={transaction} />
                            </div>
                        )
                    })
                }
                {/* <hr />
                <Button
                    bsStyle="danger"
                    onClick={this.fetchMineTransactions}
                >
                    Mine the Transactions
                </Button> */}
            </div>
        )
    }
}


export default TransactionPool;
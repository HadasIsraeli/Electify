import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';
// import { NavLink } from 'react-router-dom';
// import history from '../history';
import { withRouter } from "react-router-dom";

const POLL_INERVAL_MS = 10000;
class TransactionPool extends Component {
    state = { transactionPoolMap: {} };

    fetchTransactionPoolMap = () => {
        fetch(`${document.location.origin}/api/transaction-pool-map`)
            .then(response => response.json())
            .then(json => this.setState({ transactionPoolMap: json }));
    }

    fetchMineTransactions = () => {
        fetch(`${document.location.origin}/api/mine-transactions`)
            .then(response => {
                if (response.status === 200) {
                    alert('success');
                    this.props.history.push('/blocks');
                } else {
                    alert('The mine-transactions block request did not complete.');
                }
            });
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
                <h3>Vote Submitted</h3>
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
                <hr />
                <Button onClick={this.fetchMineTransactions}>send Vote</Button>
            </div>
        )
    }
}

export default withRouter(TransactionPool);
import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import history from '../history';
import { withRouter } from "react-router-dom";

class ConductTransaction extends Component {
    state = { recipient: '', amount: 0 };


    updateRecipient = event => {
        this.setState({ recipient: event.target.value });
    }

    updateAmount = event => {
        this.setState({ amount: Number(event.target.value) });
    }

    conductTransaction = () => {
        const { recipient, amount } = this.state;

        fetch(`${document.location.origin}/api/transact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipient, amount })
        }).then(response => response.json())
            .then(json => {
                alert(json.message || json.type);
                this.props.history.push('/transaction-pool');
            });
    }

    render() {
        // console.log('this.state', this.state);

        return (
            <div className='ConductTransaction'>
                <div>
                    <nav className="nav-wrapper blue darken-9">
                        <div className="container">
                            <ul className="right">
                                <li><NavLink to="/BlockApp">Blockchain</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <h3>Conduct a Transaction</h3>
                <FormGroup>
                    <FormControl
                        input='text'
                        placeholder='Party Name'
                        value={this.state.recipient}
                        onChange={this.updateRecipient}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        input='number'
                        placeholder='amount'
                        value={this.state.amount}
                        onChange={this.updateAmount}
                    />
                </FormGroup>
                <div>
                    <Button
                        bsStyle="danger"
                        onClick={this.conductTransaction}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        )
    }
};

export default withRouter(ConductTransaction);
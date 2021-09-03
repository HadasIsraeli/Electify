import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import VoteCard from './VoteCard';

class ConductTransaction extends Component {
    state = {
        recipient: '',
        amount: 0
    };

    chooseParty = (title, number) => {
        this.updateRecipient(title);
        this.updateAmount(number);
    }

    updateRecipient = value => {
        this.setState({ recipient: value });
    }

    updateAmount = value => {
        this.setState({ amount: Number(value) });
    }

    conductTransaction = () => {
        const { recipient, amount } = this.state;
        if ((amount === 1 && recipient === 'Yair Lapid') || (amount === 2 && recipient === 'Avigdor Lieberman')
            || (amount === 3 && recipient === "Gideon Sa'ar") || (amount === 4 && recipient === 'Benjamin Netanyahu')
            || (amount === 5 && recipient === 'Naftali Bennett') || (amount === 6 && recipient === 'Merav Michaeli')) {
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
    }

    render() {

        return (
            <div className='ConductTransaction'>
                <h3>BallotBox</h3>
                <FormGroup>
                    <FormControl
                        input='text'
                        placeholder='Party Name'
                        value={this.state.recipient}
                        onChange={(event) => this.updateRecipient(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        input='number'
                        placeholder='Party number'
                        value={this.state.amount}
                        onChange={(event) => this.updateAmount(event.target.value)}
                    />
                </FormGroup>
                <div>
                    <Button onClick={this.conductTransaction}>Submit</Button>
                </div>
                <br />
                <VoteCard chooseParty={this.chooseParty} />
            </div>
        )
    }
};

export default withRouter(ConductTransaction);
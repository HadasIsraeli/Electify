import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import history from '../history';
import { withRouter } from "react-router-dom";
import VoteCard from './VoteCard';

class ConductTransaction extends Component {
    state = {
        recipient: '',
        amount: 0
    };

    updateRecipient = event => {
        this.setState({ recipient: event.target.value });
    }

    updateAmount = event => {
        this.setState({ amount: Number(event.target.value) });
    }

    conductTransaction = () => {
        const { recipient, amount } = this.state;
        if (amount !== 0 || recipient !== '') {
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
        // console.log('this.state', this.state);

        return (
            <div className='ConductTransaction'>
                {/* <div>
                    <nav className="nav-wrapper blue darken-9">
                        <div className="container">
                            <ul className="right">
                                <li><NavLink to="/BlockApp">Blockchain</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div> */}
                <h3>BallotBox</h3>
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
                        placeholder='Party number'
                        value={this.state.amount}
                        onChange={this.updateAmount}
                    />
                </FormGroup>
                <div>
                    <Button onClick={this.conductTransaction}>Submit</Button>
                </div>
                <br />
                <VoteCard />
            </div>
        )
    }
};

export default withRouter(ConductTransaction);
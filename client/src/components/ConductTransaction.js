import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import history from '../history';

class ConductTransaction extends Component {
    state = { recipient: '', amount: 0 };


    updateRecipient = event => {
        this.setState({ recipient: event.target.value });
    }

    updateAmount = event => {
        this.setState({ amount: Number(event.target.value) });
    }


    render() {
        console.log('this.state', this.state);

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
            </div>
        )
    }
};

export default ConductTransaction;

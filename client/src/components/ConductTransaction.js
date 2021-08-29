import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import history from '../history';
import { withRouter } from "react-router-dom";

function VoteCard() {
    // const parties = [
    //     { title: "Party1", description: "party1 description", number: "12" },
    //     { title: "Party2", description: "party2 description", number: "123" },
    //     { title: "Party3", description: "party3 description", number: "124" },
    //     { title: "Party4", description: "party4 description", number: "125" },
    //     { title: "Party5", description: "party5 description", number: "126" },
    //   ];

    return (
        <div className="container__card">
            <Card title="Party1" description="party1 description"/>
            <Card title="Party2" description="party2 description"/>
            <Card title="Party3" description="party3 description"/>
            <Card title="Party4" description="party4 description"/>
            <Card title="Party5" description="party5 description"/>
        </div>
    )
}

function Card(props) {
    return (
        <div className="card">
            <div>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <h6>{props.info}</h6>
            </div>
            <button>choose party</button>
        </div>
    )
}

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
                        placeholder='amount'
                        value={this.state.amount}
                        onChange={this.updateAmount} />
                </FormGroup>
                <div>
                    <Button onClick={this.conductTransaction}>Submit</Button>
                </div>
                <VoteCard />
            </div>
        )
    }
};

export default withRouter(ConductTransaction);
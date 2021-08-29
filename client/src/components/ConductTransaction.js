import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import history from '../history';
import { withRouter } from "react-router-dom";

function VoteCard() {
    const parties = [
        { title: "Donald Trump", description: "Vote for me", number: "11" },
        { title: "Barak Obama", description: "I'm will WIN", number: "22" },
        { title: "Britney Spears", description: "Ops I did it again", number: "33" },
        { title: "Benjamin Netanyahu", description: "Im gonna live forever", number: "44" },
        { title: "Michael Jackson", description: "I'm bad", number: "55" },
        { title: "Noa Killa", description: "Million dollers", number: "66" }
    ];

    return (
        <Card className="container__card">
            {parties.map((party) => (
                <PartyCard key={party.number} title={party.title} description={party.description} number={party.number} />
            ))}
        </Card>
    )
}

function PartyCard(props) {
    return (
        <div className="card">
            <Card>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <h6>{props.number}</h6>
            </Card>
            {/* <Button>choose party</Button> */}
            <Button onClick={() =>
                chooseParty(props.title, props.number)}>choose party</Button>
        </div>
    )
}

function Card(props) {
    const classes = props.className + " card";
    return (
        <div className={classes}>{props.children}</div>
    )
}

const chooseParty = (title, number) => {
    // const { recipient, amount } = this.state;
    // onChange = { this.updateAmount }
    console.log('onClick PARTY ' + title +' '+ number);
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
                        placeholder='amount'
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
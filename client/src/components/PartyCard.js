import React from 'react';
import { Button } from 'react-bootstrap';
import Card from "./Card";

const PartyCard = (props) => {
    const recipient = props.title;
    const amount = props.number;

    return (
        <div className="card">
            <Card>
                <h4>{recipient}</h4>
                <p>{props.description}</p>
                <h6>{amount}</h6>
            </Card>
            <Button onClick={() => props.chooseParty(recipient, amount)}>choose party</Button>
        </div>
    )
}

export default PartyCard;
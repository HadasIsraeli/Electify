import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from "./Card";

const PartyCard = (props) => {
    const chooseParty = (title, number) => {
        setRecipient(title);
        SetAmount(number);
        console.log('onClick PARTY ' + title + ' ' + number);
    }

    const [recipient, setRecipient] = useState('');
    const [amount, SetAmount] = useState(0);
    console.log('recipient', recipient);
    console.log('amount', amount);

    return (
        <div className="card">
            <Card>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <h6>{props.number}</h6>
            </Card>
            <Button onClick={() =>
                chooseParty(props.title, props.number)}>choose party</Button>
        </div>
    )
}

export default PartyCard;
import React, {useState} from 'react';
import Card from './Card';
import PartyCard from './PartyCard';

const VoteCard = (props) => {
    const parties = [
        { title: "Yair Lapid", description: "Yesh Atid", number: "11" },
        { title: "Avigdor Lieberman", description: "Yisrael Beiteinu", number: "22" },
        { title: "Gideon Sa'ar", description: "New Hope", number: "33" },
        { title: "Benjamin Netanyahu", description: "Likud", number: "44" },
        { title: "Naftali Bennett", description: "Yamina", number: "55" },
        { title: "Merav Michaeli", description: "Israeli Labor Party", number: "66" }
    ];

    // const chooseParty = (title, number) => {
    //     setRecipient(title);
    //     SetAmount(number);
    //     console.log('onClick PARTY ' + title + ' ' + number);
    // }

    // const [recipient, setRecipient] = useState('');
    // const [amount, SetAmount] = useState(0);

    return (
        <Card className="container__card">
            {parties.map((party) => (
                <PartyCard chooseParty={props.chooseParty} key={party.number} title={party.title} description={party.description} number={party.number} />
            ))}
        </Card>
    )
}
export default VoteCard;
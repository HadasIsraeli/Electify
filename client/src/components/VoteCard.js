import React, {useState} from 'react';
import Card from './Card';
import PartyCard from './PartyCard';

const VoteCard = (props) => {
    const parties = [
        { title: "Donald Trump", description: "Vote for me", number: "11" },
        { title: "Barak Obama", description: "I'm will WIN", number: "22" },
        { title: "Britney Spears", description: "Ops I did it again", number: "33" },
        { title: "Benjamin Netanyahu", description: "Im gonna live forever", number: "44" },
        { title: "Michael Jackson", description: "I'm bad", number: "55" },
        { title: "Noa Killa", description: "Million dollers", number: "66" }
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
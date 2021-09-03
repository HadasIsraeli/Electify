import React from 'react';
import Card from './Card';
import PartyCard from './PartyCard';

const VoteCard = (props) => {
    const parties = [
        { title: "Yair Lapid", description: "Yesh Atid", number: "1" },
        { title: "Avigdor Lieberman", description: "Yisrael Beiteinu", number: "2" },
        { title: "Gideon Sa'ar", description: "New Hope", number: "3" },
        { title: "Benjamin Netanyahu", description: "Likud", number: "4" },
        { title: "Naftali Bennett", description: "Yamina", number: "5" },
        { title: "Merav Michaeli", description: "Israeli Labor Party", number: "6" }
    ];

    return (
        <Card className="container__card">
            {parties.map((party) => (
                <PartyCard chooseParty={props.chooseParty} key={party.number} title={party.title} description={party.description} number={party.number} />
            ))}
        </Card>
    )
}
export default VoteCard;
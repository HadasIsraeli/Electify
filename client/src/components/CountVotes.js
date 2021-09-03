import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import BarChart from './BarChart';

class CountVotes extends Component {
    state = {
        votedPartyName: [],
        loading: true,
        countVotes: [],
        winningParty: " ",
        parties: ["Yair Lapid, Yesh Atid", "Avigdor Lieberman, Yisrael Beiteinu", "Gideon Sa'ar, New Hope",
            "Benjamin Netanyahu, Likud", "Naftali Bennett, Yamina", "Merav Michaeli, Israeli Labor Party"]
    };

    async componentDidMount() {
        const url = `${document.location.origin}/api/blocks`;
        const fetchPromise = await fetch(url);
        const allBlocks = await fetchPromise.json();
        const data = [];

        for (let i = 1; i < allBlocks.length; i++) {
            data[i] = JSON.stringify(allBlocks[i].data[0].outputMap);
        }

        this.setState({ votedPartyName: data, loading: false });
    }

    voteCount = () => {
        const parties = ["Yair Lapid", "Avigdor Lieberman", "Gideon Sa'ar",
            "Benjamin Netanyahu", "Naftali Bennett", "Merav Michaeli"];
        const votes = this.state.votedPartyName;
        const count = [0, 0, 0, 0, 0, 0];

        for (let i = 1; i < votes.length; i++) {
            for (let j = 0; j < parties.length; j++) {
                if (votes[i].search(parties[j]) > -1) {
                    count[j]++;
                }
            }
        }
        console.log(count + ' count');
        let index = count.indexOf(Math.max(...count));
        const winning = (Math.max(...count) === 0) ? ("Electify") : (this.state.parties[index]);
        this.setState({ countVotes: count, winningParty: winning });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        return (
            <div className="App">
                <div>
                    <BarChart countVotes={this.state.countVotes} parties={this.state.parties}/>
                </div>
                <br />
                <Button onClick={this.voteCount}>Count Votes</Button>
                <br />
                <h3>The winning party is:</h3>
                <div>
                    <h1>{this.state.winningParty}</h1>
                </div>
            </div>
        );
    }
}

export default CountVotes;

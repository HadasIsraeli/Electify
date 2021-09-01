import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import BarChart from './BarChart';

class CountVotes extends Component {
    state = {
        partyName: [],
        loading: true,
        countVotes: [],
        winningParty: " "
    };


    async componentDidMount() {
        const url = `${document.location.origin}/api/blocks`;
        const fetchPromise = await fetch(url);
        const allBlocks = await fetchPromise.json();
        const data = [];

        console.log(allBlocks);

        for (let i = 1; i < allBlocks.length; i++) {
            data[i] = JSON.stringify(allBlocks[i].data[0].outputMap);
        }

        this.setState({ partyName: data, loading: false });
    }

    voteCount = () => {
        const parties = ["Yair Lapid", "Avigdor Lieberman", "Gideon Sa'ar", "Benjamin Netanyahu", "Naftali Bennett", "Merav Michaeli"];
        const votes = this.state.partyName;
        const count = [0, 0, 0, 0, 0, 0];

        for (let i = 1; i < votes.length; i++) {
            for (let j = 0; j < parties.length; j++) {
                if (votes[i].search(parties[j]) > -1) {
                    count[j]++;
                }
            }
        }

        let index = count.indexOf(Math.max(...count));
        const winning = parties[index];
        this.setState({ countVotes: count, winningParty: winning });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        return (
            <div className="App">
                <h2>Election Results</h2>
                <div>
                    {/* {this.state.partyName} */}
                    <br />
                    <h1>{this.state.winningParty}</h1>
                    <br />
                    {this.state.countVotes}
                </div>
                <hr />
                <Button onClick={this.voteCount}>Count Votes</Button>
                <br />
                {/* <BarChart /> */}
            </div>
        );
    }
}

export default CountVotes;

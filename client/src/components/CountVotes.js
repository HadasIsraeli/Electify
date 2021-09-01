import React, { Component, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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

        console.log(allBlocks);
        // console.log(allBlocks.length);

        const data = [];

        for (let i = 1; i < allBlocks.length; i++) {
            data[i] = JSON.stringify(allBlocks[i].data[0].outputMap);
            // console.log(data[i]);
        }

        this.setState({ partyName: data, loading: false });
    }

    voteCount = () => {
        const parties = ["Yair Lapid", "Avigdor Lieberman", "Gideon Sa'ar", "Benjamin Netanyahu", "Naftali Bennett", "Merav Michaeli"];
        const votes = this.state.partyName;
        const count = [0, 0, 0, 0, 0, 0];

        // console.log(parties + ' parties');
        // console.log(votes + ' votes');
        // console.log(votes.length + ' votes.length');

        for (let i = 1; i < votes.length; i++) {
            for (let j = 0; j < parties.length; j++) {
                if (votes[i].search(parties[j]) > -1) {
                    count[j]++;
                    // console.log(parties[j] + ' voted party ' + count[j]);
                }
            }
        }

        let index = count.indexOf(Math.max(...count));
        const winning = parties[index];
        // console.log(index + ' winning: ' + winning);
        // console.log(count + ' count');
        this.setState({ countVotes: count, winningParty: winning });
    }


    render() {
        return (
            <div className="App">
                {/* <div>
                    <nav className="nav-wrapper blue darken-9">
                        <div>
                            <ul className="center">
                                <li><NavLink to="/BlockApp">Exit</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div> */}
                <h2>Election Results</h2>
                {
                    this.state.loading ? (<div>Loading...</div>) : (
                        <div>
                            {/* {this.state.partyName}
                            <br /> */}
                            {this.state.winningParty}
                            <br />
                            {this.state.countVotes}
                        </div>
                    )
                }
                <hr />
                <Button onClick={
                    this.voteCount
                }>Count Votes</Button>
                <br />
            </div>
        );
    }
}

export default CountVotes;

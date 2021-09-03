import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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

        console.log(allBlocks);

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
        const winning = (Math.max(...count) === 0) ? ("Electify") : (parties[index]);
        this.setState({ countVotes: count, winningParty: winning });

        // this.getChartData(count);
    }

    // getChartData = (count) => {
    //     const voteList = count;
    //     console.log('count ' + count);
    //     console.log('vote list ' + voteList);
    // }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        return (
            <div className="App">
                <h3>Election Results</h3>
                <div>
                    <BarChart countVotes={this.state.countVotes} />
                </div>
                <br />
                <h3>The winning party is:</h3>
                <div>
                    <br />
                    <h1>{this.state.winningParty}</h1>
                    <br />
                    {this.state.parties[0]} : {this.state.countVotes[0]}
                    <br />
                    {this.state.parties[1]} : {this.state.countVotes[1]}
                    <br />
                    {this.state.parties[2]} : {this.state.countVotes[2]}
                    <br />
                    {this.state.parties[3]} : {this.state.countVotes[3]}
                    <br />
                    {this.state.parties[4]} : {this.state.countVotes[4]}
                    <br />
                    {this.state.parties[5]} : {this.state.countVotes[5]}
                </div>
                <hr />
                <Button onClick={this.voteCount}>Count Votes</Button>
                <br />
                <div>
                    <nav className="nav-wrapper blue darken-9">
                        <div>
                            <ul className="right">
                                <li><NavLink
                                    to="/BarChart">BarChart</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default CountVotes;

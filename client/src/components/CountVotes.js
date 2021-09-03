import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class CountVotes extends Component {
    state = {
        votedPartyName: [],
        loading: true,
        countVotes: [],
        winningParty: " ",
        parties: ["Yair Lapid, Yesh Atid", "Avigdor Lieberman, Yisrael Beiteinu", "Gideon Sa'ar, New Hope",
            "Benjamin Netanyahu, Likud", "Naftali Bennett, Yamina", "Merav Michaeli, Israeli Labor Party"],
        // chartData: {}
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

        // this.getChartData();

        this.setState({ votedPartyName: data, loading: false });
    }

    voteCount = () => {
        const parties = ["Yair Lapid", "Avigdor Lieberman", "Gideon Sa'ar", "Benjamin Netanyahu", "Naftali Bennett", "Merav Michaeli"];
        const votes = this.state.votedPartyName;
        const count = [0, 0, 0, 0, 0, 0];

        for (let i = 1; i < votes.length; i++) {
            for (let j = 0; j < parties.length; j++) {
                if (votes[i].search(parties[j]) > -1) {
                    count[j]++;
                }
            }
        }

        let index = count.indexOf(Math.max(...count));
        const winning = (Math.max(...count) === 0) ? ("Electify") : (parties[index]);
        this.setState({ countVotes: count, winningParty: winning });
    }

    // getChartData() {
    //     this.setState({
    //         chartData: {
    //             labels: this.state.parties,
    //             datasets: [
    //                 {
    //                     label: 'Vote status',
    //                     data: this.state.CountVotes,
    //                     backgroundColor: [
    //                         'rgba(255, 99, 132, 0.2)',
    //                         'rgba(54, 162, 235, 0.2)',
    //                         'rgba(255, 206, 86, 0.2)',
    //                         'rgba(75, 192, 192, 0.2)',
    //                         'rgba(153, 102, 255, 0.2)',
    //                         'rgba(255, 159, 64, 0.2)',
    //                     ],
    //                     borderColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)',
    //                     ],
    //                     borderWidth: 1,
    //                 }
    //             ]
    //         }
    //     });
    // }

    render() {
        // if (this.state.loading) {
        //     return <div>loading...</div>;
        // }

        return (
            <div className="App">
                <h3>Election Results</h3>
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
                                //  chartData={this.state.chartData} 
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

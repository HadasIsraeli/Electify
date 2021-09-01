import React, { Component ,useState} from 'react';
// import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class CountVotes extends Component {
    state = {
        partyName: [],
        loading: true
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
            if (data[i].search("Yair Lapid") > -1) {
                console.log('Yair Lapid');
            }
            if (data[i].search("Avigdor Lieberman") > -1) {
                console.log('Avigdor Lieberman');
            }
            if (data[i].search("Gideon Sa'ar") > -1) {
                console.log("Gideon Sa'ar");
            }
            if (data[i].search("Benjamin Netanyahu") > -1) {
                console.log('Benjamin Netanyahu');
            }
            if (data[i].search("Naftali Bennett") > -1) {
                console.log('Naftali Bennett');
            }
            if (data[i].search("Merav Michaeli") > -1) {
                console.log('Merav Michaeli');
            }
        }

        this.setState({ partyName: data, loading: false });
    }

    voteCount() {
        const parties = ["Yair Lapid", "Avigdor Lieberman", "Gideon Sa'ar",
            "Benjamin Netanyahu", "Naftali Bennett", "Merav Michaeli"];

        console.log(parties[0] + ' parties');
        console.log(this.state.partyName + ' partyName');
        console.log(this.state.partyName.length + ' partyName.length');

    }


    // fetchApiBlocks = (cb) => {
    //     var url = `${document.location.origin}/api/blocks`;

    //     const fetchPromise = fetch(url);

    //     fetchPromise.then(response => {
    //         return response.json();
    //     }).then(allBlocks => {
    //         const data = allBlocks.map(Blocks =>
    //             Blocks.data[0]);

    //         console.log(data);
    //     });
    // }


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
                    this.state.loading ? (<div>Loading...</div>) : (<div>{this.state.partyName}</div>)
                }
                <hr />
                <Button onClick={this.voteCount(this.state.partyName)}>Count Votes</Button>
                <br />
            </div>


            // /*<div className = "App" onLoad = { this.fetchApiBlocks() } >
            //         <h2>Election Results</h2>
            //     {/* <button onClick={
            //         this.fetchApiBlocks((data) => console.log({data}))
            //         }>Count Votes</button> */}
            // </div >*/
        );
    }
}

export default CountVotes;

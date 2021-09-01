import React, { Component } from 'react';


class CountVotes extends Component {
    // state = {
    //     partyName: null,
    //     loading: true
    // };

    // async componentDidMount() {
    //     const url = `${document.location.origin}/api/blocks`;
    //     const fetchPromise = await fetch(url);
    //     const allBlocks = await fetchPromise.json();

    //     const data = allBlocks[1].data[0].outputMap;
    //     console.log(data);
    //     this.setState({ partyName: data, loading: false });
    // }


    fetchApiBlocks = (cb) => {
        var url = `${document.location.origin}/api/blocks`;

        const fetchPromise = fetch(url);
        fetchPromise.then(response => {
            return response.json();
        }).then(allBlocks => {
            // console.log(allBlocks);
            const data = allBlocks.map(allBlocks =>
                allBlocks.data[0]);

            console.log(data);
        });
    }


    render() {
        return (
            // <div>
            //     {this.state.loading ? (<div>Loading...</div>) :
            //         (<div>vote</div>)}
            // </div>

            <div className = "App" onLoad = { this.fetchApiBlocks() } >
                    <h2>Election Results</h2>
                {/* <button onClick={
                    this.fetchApiBlocks((data) => console.log({data}))
                    }>Count Votes</button> */}
            </div >
        );
    }
}

export default CountVotes;

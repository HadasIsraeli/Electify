import React, { Component } from 'react';


class CountVotes extends Component {
    // state = { blocks: [] };

    fetchApiBlocks = (cb) => {
        var url = "http://localhost:3000/api/blocks";
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch(url,requestOptions).then(response => response.json()).then(allBlocks => cb(allBlocks))
    }


    render() {
        return (
            
            <div className="App" onLoad={this.fetchApiBlocks((data)=> console.log({data}))}>
                <h2>Election Results</h2>
                {/* <button onClick={
                    this.fetchApiBlocks((data) => console.log({data}))
                    }>Count Votes</button> */}
                <h3></h3>

            </div>
        )
    }
}

export default CountVotes;

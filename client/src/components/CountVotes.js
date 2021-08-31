import React, { Component } from 'react';


class CountVotes extends Component {
    // state = { blocks: [] };

    // fetchApiBlocks = () => {
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };

    //     fetch("http://localhost:3000/api/blocks", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // }

    render() {
        return (
            <div className="App">
                <h2>Election Results</h2>
                <buton></buton>
                <h3></h3>

            </div>
        )
    }
}

export default CountVotes;

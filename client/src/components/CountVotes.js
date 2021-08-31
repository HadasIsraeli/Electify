import React, { Component } from 'react';
const Transaction = require('./transaction');


class CountVotes extends Component {

    fetchApiBlocks = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${document.location.origin}/api/blocks`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div className="App">
                <h2>Election Results</h2>
                <h3></h3>

            </div>
        )
    }
}

export default CountVotes;

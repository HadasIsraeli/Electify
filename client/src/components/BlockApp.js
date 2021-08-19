// import { response } from 'express';
import React, { Component } from 'react';
// import axios from 'axios';

class BlockApp extends Component {
    state = { walletInfo: { address: 'fooxv6', balance: 9999 } };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json =>  console.log('json',json));
    }
    // componentDidMount() {
    //     axios.get('http://localhost:3000/api/wallet-info')
    //     .then(res => {
    //         console.log(res)
    //         this.setState({
    //             walletInfo: res.json()
    //         })
    //     })
    // }

    render() {
        const { address, balance } = this.state.walletInfo;

        return (
            <div>
                <div>Wellcome!</div>
                <div>Adress: {address}</div>
                <div>Balance: {balance}</div>
            </div>
        );
    }
}

export default BlockApp;
import React, { Component } from 'react';
import Blocks from './Blocks';
import blockchain from '../assets/blockchain.png';

class BlockApp extends Component {
    state = { walletInfo: {} };

    componentDidMount() {
        fetch('http://localhost:3000/api/wallet-info')
            .then(response => response.json())
            .then(json => this.setState({ walletInfo: json }));
    }

    render() {
        const { address, balance } = this.state.walletInfo;

        return (
            <div className='App'>
                <img alt='blockchain' src={blockchain}></img>
                <br />
                <div>Wellcome!</div>
                <br />
                <div className='WalletInfo'>
                    <div>Adress: {address}</div>
                    <div>Balance: {balance}</div>
                </div>
                <br />
                <Blocks />
            </div>
        );
    }
}

export default BlockApp;
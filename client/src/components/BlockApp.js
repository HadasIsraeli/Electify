import React, { Component } from 'react';
import blockchain from '../assets/blockchain.png';
import { NavLink } from 'react-router-dom';

class BlockApp extends Component {
    state = { walletInfo: {} };

    componentDidMount() {
        fetch(`${document.location.origin}/api/wallet-info`)
            .then(response => response.json())
            .then(json => this.setState({ walletInfo: json }));
    }

    render() {
        // const { address, balance } = this.state.walletInfo;

        return (
            <div className='App'>
                <br />
                <div>
                    <nav className="nav-wrapper blue darken-9">
                        <div>
                            <ul className="right">
                                <li><NavLink to="/Blocks">Blocks</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <br />
                <div>
                    <nav className="nav-wrapper blue darken-9">
                        <div>
                            <ul className="right">
                                <li><NavLink to="/CountVotes">Count Votes</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <br />
                <img alt='blockchain' src={blockchain}></img>
                <br />
                {/* <div className='WalletInfo'>
                    <div>Adress: {address}</div>
                    <div>Balance: {balance}</div>
                </div> */}
            </div>
        );
    }
}

export default BlockApp;
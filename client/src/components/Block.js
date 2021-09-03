import React, { Component } from 'react';
import Transaction from './Transaction';

class Block extends Component {
    state = { displayTransaction: false };

    toggleTransaction = () => {
        this.setState({ displayTransaction: !this.state.displayTransaction });
    }

    get displayTransaction() {
        const { data } = this.props.block;
        const stringifiedData = JSON.stringify(data);
        const dataDisplay = stringifiedData.length > 35 ? `${stringifiedData.substring(0, 35)}...` : stringifiedData;

        if (this.state.displayTransaction) {
            return (
                <div>
                    {
                        data.map(transaction => (
                            <div key={transaction.id}>
                                <hr />
                                <Transaction transaction={transaction} />
                            </div>
                        ))
                    }
                    <br />
                    <bottun onClick={this.toggleTransaction}>Show Less</bottun>
                </div>
            )
        }

        return (
            <div>
                <div>Data:{dataDisplay}</div>
                <bottun onClick={this.toggleTransaction}>Show More</bottun>
            </div>
        );
    }

    render() {
        // console.log('this.displayTransaction', this.displayTransaction);

        const { timestamp, hash } = this.props.block;
        const hashDisplay = `${hash.substring(0, 15)}...`;

        return (
            <div className='Block'>
                <div>Hash:{hashDisplay}</div>
                <div>Timestemp:{new Date(timestamp).toLocaleString()}</div>
                {this.displayTransaction}
            </div>
        );
    }
};

export default Block;
import React from 'react';

const Transaction = ({ transaction }) => {
    const { input, outputMap } = transaction;
    console.log(Object.keys(outputMap) + ' outputMap test' );
    console.log(transaction.id + ' transaction.id');
    const recipients = Object.keys(outputMap);

    return (

        <div className='Transaction'>
            <div>From: {`${input.address.substring(0, 20)}...`} | Balance: {input.amount}</div>
            {
                recipients.map(recipient => (
                    <div key={recipient}>
                        To: {`${recipient.substring(0, 20)}...`} | Sent: {outputMap[recipient]}
                    </div>
                ))
            }
        </div>
    );
}

export default Transaction;
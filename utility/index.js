const EC = require('elliptic').ec;//EC - elliptic cryptography 
const cryptoHash = require('./crypto-hash');

const ec = new EC('secp256k1');//standarts of efficient cryptography, prim, 256 bits 

const verifySignature = ({ publicKey, data, signature }) => {
    const keyFromPublic = ec.keyFromPublic(publicKey, 'hex');

    return keyFromPublic.verify(cryptoHash(data), signature);
};

module.exports = { ec, verifySignature ,cryptoHash };
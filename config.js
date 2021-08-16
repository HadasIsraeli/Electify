// a file to set the genesis block a hard coded and global values 

const MINE_RATE = 1000;//1 sec 
const INITIAL_DIFFICULTY = 3;//setting the difficulty for the num of zeros in the hash

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-----',
    hash: 'hash-1',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};

const STARTING_BALANCE = 1000;
const REWARD_INPUT = { address: '*authorized-reward*' };
const MINING_REWARD = 50;

module.exports = { GENESIS_DATA, MINE_RATE, STARTING_BALANCE, REWARD_INPUT, MINING_REWARD };
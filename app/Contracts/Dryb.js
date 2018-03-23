const web3 = use('App/Ethereum/Web3')
const abi = require('./abi/dryb')

const DrybContract = web3.eth.contract(abi)
const DrybInstnce = DrybContract.at('0x8065f4c7b8c2bf53561af92d9da2ea022a0b28ca')

module.exports = DrybInstnce

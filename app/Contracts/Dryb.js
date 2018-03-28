const web3 = use('App/Ethereum/Web3')
const abi = require('./abi/dryb')

module.exports = new web3.eth.Contract(abi, '0xb529f14aa8096f943177c09ca294ad66d2e08b1f' /* contract address */)

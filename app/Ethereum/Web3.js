const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
module.exports = web3

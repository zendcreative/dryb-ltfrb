'use strict'
const web3 = use('App/Ethereum/Web3')
const Dryb = use('App/Contracts/Dryb')


class MainController {

  async index ({ view, response }) {
    let connection = web3.isConnected()
    const baseFare = Dryb.baseFare()
    const pricePerKm = Dryb.pricePerKm()
    const pricePerMinute = Dryb.pricePerMinute()
    const perWaitingTime = Dryb.perWaitingTime()
    console.log(baseFare.toNumber(), pricePerKm.toNumber(), pricePerMinute.toNumber(), perWaitingTime.toNumber());
    return response.json({ connection })
  }

}

module.exports = MainController

'use strict'
const web3 = use('App/Ethereum/Web3')
const DrybContract = use('App/Contracts/Dryb')

class MainController {

  async index ({ view, response }) {
    const connection = await web3.eth.net.isListening()

    let base = await DrybContract.methods.baseFare().call()

    return response.json({ connection, base })
  }

  async setFare ({ request, response, params }) {

    let connection = await web3.eth.net.isListening()
    let fare = {}
    if (params.setting == 'base') {
      fare = await DrybContract.methods.setBaseFare(request.input('fare')).send({ from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57', gas: '3000000'  })

    } else if (params.setting == 'minutes') {
      fare = await DrybContract.methods.setPricePerMinute(request.input('fare')).send({ from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57', gas: '3000000'  })

    } else {
      fare = await DrybContract.methods.setPricePerKM(request.input('fare')).send({ from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57', gas: '3000000'  })
    }

    return response.json({ connection, fare })
  }

  async getVehicle ({ response, params }) {
    let connection = await web3.eth.net.isListening()
    let $vehicle = web3.utils.asciiToHex(params.vehicle)
    let vehicle = await DrybContract.methods.getVehicleFare($vehicle).call()
    return response.json({ connection, vehicle })

  }

}

module.exports = MainController

module.exports = [
  {
    "constant": true,
    "inputs": [],
    "name": "baseFare",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "adminList",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "perWaitingTime",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "pricePerKm",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "rideList",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "approverList",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "driverList",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "pricePerMinute",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "admin",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "message",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "vehicle",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "_baseFare",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_pricePerKm",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_pricePerMinute",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_perWaitingTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "VehicleFareChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "admin",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "message",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "from",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "to",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "date",
        "type": "uint256"
      }
    ],
    "name": "FareChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "admin",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "message",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "driver",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "firstname",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "lastname",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "date",
        "type": "uint256"
      }
    ],
    "name": "DriverAdded",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_address",
        "type": "address"
      },
      {
        "name": "name",
        "type": "string"
      }
    ],
    "name": "addAdmin",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAdmins",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_address",
        "type": "address"
      },
      {
        "name": "name",
        "type": "string"
      }
    ],
    "name": "addApprover",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getApprovers",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "fare",
        "type": "uint256"
      }
    ],
    "name": "setBaseFare",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "setPricePerMinute",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "setPricePerKM",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_type",
        "type": "bytes32"
      },
      {
        "name": "_baseFare",
        "type": "uint256"
      },
      {
        "name": "_pricePerKm",
        "type": "uint256"
      },
      {
        "name": "_pricePerMinute",
        "type": "uint256"
      },
      {
        "name": "_perWaitingTime",
        "type": "uint256"
      }
    ],
    "name": "setVehicleFare",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_type",
        "type": "bytes32"
      }
    ],
    "name": "getVehicleFare",
    "outputs": [
      {
        "name": "_baseFare",
        "type": "uint256"
      },
      {
        "name": "_pricePerKm",
        "type": "uint256"
      },
      {
        "name": "_pricePerMinute",
        "type": "uint256"
      },
      {
        "name": "_perWaitingTime",
        "type": "uint256"
      },
      {
        "name": "_status",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "driverAddress",
        "type": "address"
      },
      {
        "name": "firstname",
        "type": "string"
      },
      {
        "name": "lastname",
        "type": "string"
      }
    ],
    "name": "addDriver",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "driverAddress",
        "type": "address"
      }
    ],
    "name": "verifyDriver",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "getDriver",
    "outputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDrivers",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getEarnings",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_address",
        "type": "address"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "mobile",
        "type": "string"
      }
    ],
    "name": "addPassenger",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "getPassenger",
    "outputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPassengers",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "rideId",
        "type": "bytes32"
      },
      {
        "name": "driver",
        "type": "address"
      },
      {
        "name": "passenger",
        "type": "address"
      }
    ],
    "name": "createRide",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "rideId",
        "type": "bytes32"
      },
      {
        "name": "distance",
        "type": "uint256"
      },
      {
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "computeFare",
    "outputs": [
      {
        "name": "fare",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "rideId",
        "type": "bytes32"
      }
    ],
    "name": "cancelRide",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "rideId",
        "type": "bytes32"
      },
      {
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "payRide",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      },
      {
        "name": "change",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

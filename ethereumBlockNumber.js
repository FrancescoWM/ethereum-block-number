const { Web3 } = require('web3');

async function ethereumBlockNumber(rpc_url) {
  const web3 = new Web3(rpc_url);
  const blockNumber = await web3.eth.getBlockNumber();
  return blockNumber;
}

module.exports = ethereumBlockNumber;



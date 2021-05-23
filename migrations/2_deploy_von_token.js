const VonderToken = artifacts.require('VonderToken');
const Web3 = require('web3');

module.exports = async function(deployer, network, addresses) {
  const [admin] = addresses;
  const decimal = 18;
  const initSupply = Web3.utils.toWei('1000000000', 'ether');
  await deployer.deploy(VonderToken, { from: admin });
  const VON = VonderToken.deployed();
};
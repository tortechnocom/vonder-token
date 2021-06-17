const SimpleBank = artifacts.require('SimpleBank');
const Web3 = require('web3');

module.exports = async function(deployer, network, addresses) {
    const [admin] = addresses;
    await deployer.deploy(SimpleBank, { from: admin });
    const VON = SimpleBank.deployed();
    console.log("SimpleBank: " + SimpleBank.address);

    // await VON.transfer(admin, Web3.utils.toWei("10000000", 'gwei'));
    // await VonderToken.mint(admin, Web3.utils.toWei("10000000", 'gwei'))
};
const VonderToken = artifacts.require('TTNCToken');
const Web3 = require('web3');

module.exports = async function(deployer, network, addresses) {
    const [admin] = addresses;
    await deployer.deploy(VonderToken, { from: admin });
    const VON = VonderToken.deployed();
    console.log("TTNC: " + VonderToken.address);

    // await VON.transfer(admin, Web3.utils.toWei("10000000", 'gwei'));
    // await VonderToken.mint(admin, Web3.utils.toWei("10000000", 'gwei'))
};
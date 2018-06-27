var otherContract = artifacts.require("./otherContract.sol");

module.exports = function(deployer) {
  deployer.deploy(otherContract);
};

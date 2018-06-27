var test = artifacts.require("./test.sol");

module.exports = function(deployer) {
  deployer.deploy(test,  "0xfb6358078fa612a1a14d7e11f347bbf74bec0ad2");
};

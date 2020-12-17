require("@nomiclabs/hardhat-ethers");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/" 
             + process.env.ALCHEMY_API_KEY,
        blockNumber: 11471380
      }
    }
  }
};

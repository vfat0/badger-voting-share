const { expect } = require("chai");

describe("Badger Voting Share", function() {
  it("Should deploy and have the correct totalSupply", async function() {
    const BVS = await ethers.getContractFactory("BadgerVotingShare");
    const bvs = await BVS.deploy();    
    await bvs.deployed();
    const votingTotalSupply = await bvs.totalSupply() / 1e18;
    const badgerAddress = "0x3472A5A71965499acd81997a54BBA8D852C6E53d";
    const badger = await ethers.getContractAt("IERC20", badgerAddress);
    const badgerTotalSupply = await badger.totalSupply() / 1e18;
    expect(votingTotalSupply).to.equal(badgerTotalSupply);
  });

  it("Should have the correct balance", async function() {
    const BVS = await ethers.getContractFactory("BadgerVotingShare");
    const bvs = await BVS.deploy();    
    await bvs.deployed();
    const votes = await bvs.balanceOf("0x87616fA850c87a78f307878f32D808dad8f4d401") / 1e18;
    console.log("Votes:", votes)
    expect(votes).to.be.greaterThan(0);
  })
});
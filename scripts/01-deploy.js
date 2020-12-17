const main = async () => {
    const BVS = await ethers.getContractFactory("BadgerVotingShare");
    const bvs = await BVS.deploy();    
    await bvs.deployed();
}

main();
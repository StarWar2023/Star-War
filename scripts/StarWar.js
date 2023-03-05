// scripts/deploy_upgradeable_DBat.js
const { ethers } = require('hardhat');

async function main () {
  const DBat = await ethers.getContractFactory('StarWar');
  console.log('Deploying Star...');
  const dbat = await DBat.deploy();
  await dbat.deployed();
  console.log('Star deployed to:', dbat.address);
}

main();
import { task } from "hardhat/config";
import { getExpectedContractAddress } from "../utils";

import {
  OldtimerToken,
  OldtimerToken__factory,
} from "../../typechain";

task("deploy:Dao").setAction(async function (_, { ethers, run }) {

  const tokenFactory: OldtimerToken__factory = await ethers.getContractFactory("OldtimerToken");

  const signerAddress = await tokenFactory.signer.getAddress();
  const signer = await ethers.getSigner(signerAddress);

  const token: OldtimerToken = <OldtimerToken>await tokenFactory.deploy();
  await token.deployed();

  console.log("Dao deployed to: ", {
    token: token.address,
  });

  
});

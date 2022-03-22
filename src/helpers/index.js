import { ethers, Contract } from "ethers";
import { abi } from "../configs/contract";
const contractAddress = process.env.VUE_APP_CONTRACT_ADDRESS || "";

export const initialContract = (onChainId) => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.detectNetwork().then((network) => {
      if (onChainId) {
        onChainId(network.chainId);
      }
    });
    window.ethereum.on("chainChanged", (chainId) => {
      if (onChainId) {
        onChainId(chainId);
      }
    });
    return new Contract(contractAddress, abi, provider);
  } else {
    return null;
  }
};

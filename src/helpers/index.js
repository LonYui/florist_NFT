import { ethers, Contract } from "ethers";
import { abi } from "../configs/contract";

const networkId = Number(process.env.VUE_APP_NETWORK_ID || "1");
const contractAddress = process.env.VUE_APP_CONTRACT_ADDRESS || "";

export const etherscanUrl =
  networkId === 4 ? "https://rinkeby.etherscan.io/" : "https://etherscan.io";

export const checkAndSwitchChain = async (currentChainId) => {
  if (currentChainId !== networkId) {
    try {
      window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${networkId.toString(16)}` }],
      });
    } catch (error) {
      console.error(error);
    }
  }
};

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

export const fetchWhitelistTicket = async (address) => {
  const { signature, ticket } = await fetch(
    `https://tmi-lion-nft-dapp.vercel.app/api/generate-ticket?address=${address}`
  ).then((response) => response.json());

  return { signature, ticket };
};

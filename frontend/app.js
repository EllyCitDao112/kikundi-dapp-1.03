import { ethers } from "ethers";

async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Connected account:", accounts[0]);
    } catch (error) {
      console.error("Connection error:", error);
    }
  } else {
    alert("Please install MetaMask or use WalletConnect.");
  }
}

window.onload = connectWallet;

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        console.log("Wallet connected:", accounts[0]);
      } catch (err) {
        console.error("Wallet connection failed", err);
      }
    } else {
      alert("⚠️ MetaMask or Web3 wallet not detected.");
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: '#00cc99' }}>🌱 Kikundi DApp</h1>
      {account ? (
        <p>✅ Connected: <strong>{account}</strong></p>
      ) : (
        <button onClick={connectWallet} style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#00cc99',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default App;

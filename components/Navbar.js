import { useEffect, useState, useRef } from "react";

export default function Navbar() {

  const [connected, setConnect] = useState(false);
  const [currAddress, setAddress] = useState('0x');

  const getAddress = async () => {
    const ethers = require("ethers");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    setAddress(addr);
  };

  const connectWallet = async () => {

    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (chainId !== '0x5') {
      console.log('Incorrect network! Switch your metamask network to Goerly, sending request to change');
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x5' }],
      });
    }
    await window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(() => {
        console.log("Getting account in correct chain here");
        getAddress();
      });

    setConnect(true);
  };

  useEffect(() => {
    if (window.ethereum.isConnected()) {
      console.log("connecting wallet");
      getAddress();
    }

    window.ethereum.on('chainChanged', (/*accounts*/) => {
      // does f5 if the chain changes, I guess
      console.log("The account has been changed, do something dev");
      setConnect(false);

      // window.location.reload();
    });
  });


  return <>
    <h1>Connect me whit the amazing metavereade</h1>
    <button onClick={connectWallet}>
      {connected ? "Connected" : "Connect Wallet"}
    </button>
    <h2>{connected ? currAddress : "-not connected-"}</h2>
  </>;
}


import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { useMoralis, useWeb3Contract } from "react-moralis";
import Query from "../components/contractFunctions/query";
// import { ADDRESS, ABI } from "../utils/contractData";
import styles from "../styles/Home.module.scss";

export default function Home() {
  // const { enableWeb3, isWeb3Enabled } = useMoralis();

  // const enableWeb3AndRun = () => {
  //   enableWeb3();
  //   if (isWeb3Enabled) {
  //     queryFunction();

  //   } else {
  //     console.log("something happened whit moralis web3 stuff");
  //   }
  // };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.border}>
        <h1>Connect me whit this cool app</h1>

        {/* <p>{`is web3 enabled?: ${isWeb3Enabled}`}</p>
        <button id="dirty-fix" onClick={enableWeb3}>
          Enable it
        </button> */}
        <Query />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

import { ContractKit, newKitFromWeb3 } from '@celo/contractkit';

const celoNetworkURL = 'https://<celo-network-url>';

const kit = newKitFromWeb3(new Web3(celoNetworkURL));

function App() {

const [profile, setProfile] = useState({});

async function loadProfile() {

const contract = new kit.web3.eth.Contract(abi, contractAddress);

const profileData = await contract.methods.profiles(kit.defaultAccount).call();

setProfile(profileData);

}

useEffect(() => {

loadProfile();

}, []);

return (

<div>

<h1>Decentralized Identity App</h1>

<p>Name: {profile.name}</p>

<p>Age: {profile.age}</p>

<p>Wallet Address: {profile.walletAddress}</p>

</div>

);

}

export default App;

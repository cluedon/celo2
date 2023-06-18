pragma solidity ^0.8.0;

contract Identity {

struct Profile {

string name;

uint256 age;

address walletAddress;

}

mapping(address => Profile) public profiles;

function createProfile(string memory _name, uint256 _age) public {

profiles[msg.sender] = Profile(_name, _age, msg.sender);

}

}

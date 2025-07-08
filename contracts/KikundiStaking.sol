// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract KikundiStaking {
    IERC20 public kktToken;
    mapping(address => uint256) public balances;

    constructor(address _token) {
        kktToken = IERC20(_token);
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Amount must be > 0");
        kktToken.transferFrom(msg.sender, address(this), amount);
        balances[msg.sender] += amount;
    }

    function unstake(uint256 amount) external {
        require(amount <= balances[msg.sender], "Insufficient balance");
        balances[msg.sender] -= amount;
        kktToken.transfer(msg.sender, amount);
    }

    function getStakedBalance(address user) external view returns (uint256) {
        return balances[user];
    }
}

pragma solidity ^0.4.23;

import "./otherContract.sol";

contract test  {
    uint a;
    otherContract public instance;

    constructor (address _t) public {
        instance = otherContract(_t);
    }

    function chanA(uint _a) public {
        instance.changeA(_a);
        require(false);
    }

}

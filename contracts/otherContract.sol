pragma solidity ^0.4.23;

contract otherContract {
    uint public a = 1;

    function changeA(uint _a ) public {
      a = _a;
    }
}

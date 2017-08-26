pragma solidity ^0.4.0;

contract HotelManagement {

    event LogAddGuest(address guestAddress, string nameToAdd);
    event LogPaymentMade(address accountAddress, uint amount);

    struct Guest {
        bytes32 name; // short name (up to 32 chars)
        uint roomNumber; // index of room availability array
        uint duration; // number of nights the guest has booked
        bool hasStayedBefore; // default value is false
        bool isAtHotel; // true while the guest is at the hotel
        bool hasReservation; // has reservation
    }

    struct Time {
        bytes8 begin; // dates in the form ddmmyyyy
        bytes8 end;
    }

    struct Room {
        Time[] availability;
    }

    mapping(address => Guest) public guests;
    address public manager;
    Room[] rooms;

    function HotelManagement(uint numRooms, uint pPT) {
        manager = msg.sender;
        rooms.length = numRooms;
    }

    function makeReservation(string nameToAdd, uint roomNum, Time t, uint totalOwed) public payable returns (uint) {

        LogPaymentMade(msg.sender, msg.value);

        if (msg.value < totalOwed) {
            return valueExpected - msg.value; // non zero exit code means reservation didn't go through
        }

        guests[msg.sender].name = nameToAdd;
        guests[msg.sender].hasReservation = true;
        guests[msg.sender].roomNumber = roomNum
        return 0;
    }

    function checkIn(uint roomNum) public {
        require(guests[msg.sender].hasReservation);

        LogAddGuest(msg.sender, guests[msg.sender].name);

        
        guests[msg.sender].hasReservation = false;
        guests[msg.sender].hasStayedBefore = true;
    }

    function checkout() public {

    }

    function getRoomOccupied() public constant returns (bool[]) {
        require(msg.sender == manager);
        return roomOccupied;
    }

    function getStayedBefore() public constant returns (bool) {
        return guests[msg.sender].hasStayedBefore;
    }

    /*function getGuest(address _address) public constant returns (bytes32, uint, uint, bool) {
        require(msg.sender == manager)
        return (tenants[_address].name, tenants[_address].totalOwed,
                tenants[_address].paidSoFar, tenants[_address].hasVal);
    }*/

}

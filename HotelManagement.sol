pragma solidity ^0.4.0;

contract HotelManagement {

    event LogAddGuest(address guestAddress, bytes32 nameToAdd);
    event LogCheckoutGuest(address guestAddress, bytes32 nameToCheckout);
    event LogPaymentMade(address accountAddress, uint amount);


    struct Guest {
        bytes32 name; // short name (up to 32 chars)
        uint roomNumber; // index of room availability array
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
        // money enters escrow
        LogPaymentMade(msg.sender, msg.value);

        if (msg.value < totalOwed) {
            return valueExpected - msg.value; // non zero exit code means reservation didn't go through
        }

        guests[msg.sender].name = nameToAdd;
        guests[msg.sender].hasReservation = true;
        guests[msg.sender].roomNumber = roomNum;

        return 0;
    }

    function checkIn() public {
        require(guests[msg.sender].hasReservation);

        LogAddGuest(msg.sender, guests[msg.sender].name);


        guests[msg.sender].hasReservation = false;
        guests[msg.sender].isAtHotel = true;
        guests[msg.sender].hasStayedBefore = true;
    }

    function checkout() public {
        require(guests[msg.sender].isAtHotel);

        LogCheckoutGuest(msg.sender, guests[msg.sender].name);

        guests[msg.sender].isAtHotel = false;
    }

    function getAvailability(address _address) public constant returns (bytes8, bytes8) {
        require(msg.sender == manager);

        return (rooms[guests[_address].roomNumber].availability.begin,
                rooms[guests[_address].roomNumber].availability.end);
    }

    function getStayedBefore() public constant returns (bool) { // verify review
        return guests[msg.sender].hasStayedBefore;
    }

    function getGuest(address _address) public constant returns (bytes32 /*name*/, bool /*hasStayedBefore*/, bool /*hasReservation*/) {
        require(msg.sender == manager)

        return (guests[_address].name, guests[_address].hasStayedBefore, guests[_address].hasReservation);
    }
}

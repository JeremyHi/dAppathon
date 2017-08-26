pragma solidity ^0.4.0;

contract HotelManagement {

    struct Guest {
        bytes32 name; // short name (up to 32 chars)
        uint roomNumber; // index of room availability array
        uint duration; // number of nights the guest has booked
        bool hasStayedBefore; // default value is false
        bool isAtHotel; // true while the guest is at the hotel
        bool hasReservation; // has reservation
        uint totalOwed; //
    }

    mapping(address => Guest) public guests;
    address public manager;

    bool[] roomOccupied; // false means no one is in the room

    event LogAddGuest(address guestAddress, string nameToAdd);
    event LogPaymentMade(address accountAddress, uint amount);

    /*uint[] roomPrices;*/
    uint roomPrice;

    function HotelManagement(uint numRooms, uint pricePerNight) { // uint[] pricesPerNight
        // will add prices for other rooms later
        manager = msg.sender;
        roomOccupied.length = numRooms;
        roomPrice = pricePerNight;
    }

    function makeReservation(string nameToAdd, uint roomPreference, uint duration) public payable {
        // in the future we can add another param that adds room type
        // make reservation button will be grayed out if no rooms are available
        if (roomPreference == -1) {
            for (int i in number of rooms) {
                if (!roomOccupied[i]) {
                    roomPreference = i + 1;
                }
            }
        }

        // because we know if the room is occupied we will not allow occupied room entry
        // in the frond end
        LogPaymentMade(msg.sender, msg.value);
        roomOccupied[roomPreference - 1] =  true;
        
        if (msg.value < totalOwed) {
            return valueExpected - msg.value;
        } else if (msg.value > totalOwed) {

        }
    }

    function checkIn() public {
        require(guests[msg.sender].hasReservation);

        LogAddGuest(msg.sender, nameToAdd);
        guests[g] = Guest({
            name: nameToAdd,
            totalOwed: owed,
            paidSoFar: paid,
            hasVal: true
        });

        guests[msg.sender].hasStayedBefore = true;

        tenants[msg.sender].paidSoFar += msg.value;
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

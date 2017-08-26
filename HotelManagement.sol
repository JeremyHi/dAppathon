pragma solidity ^0.4.0;

contract HotelManagement {

    struct Guest {
        string name;   // short name (up to 32 bytes)
        uint roomNumber; // index of room availability array
        uint duration; // number of nights the guest has booked
        bool hasStayedBefore; // default value is false
        bool isAtHotel; // true while the guest is at the hotel
        bool hasReservation; // has reservation
        uint totalOwed;
    }

    mapping(address => Guest) public guests;
    address public manager;

    bool[] roomAvailability;
    event LogAddGuest(address guestAddress, string nameToAdd);
    event LogPaymentMade(address accountAddress, uint amount);


    function HotelManagement(uint numRooms, uint pricePerNight) {
        manager = msg.sender;
        roomAvailability.length = numRooms;

    }

    function makeReservation(string nameToAdd, uint roomPreference, uint duration) public payable {
        if (roomPreference == -1) {
            for (int i in number of rooms) {
                if (roomAvailability[i]) {
                    roomPreference = i + 1;
                }
            }
        }
        // because we know roomAvailability we will not allow occupied room entry
        // in the frond end
        roomAvailability[roomPreference - 1] =  false;
        LogPaymentMade

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

        tenants[msg.sender].paidSoFar += msg.value;



        return 0;
    }

    function checkout() public {

    }

    function getStayedBeforeStatus(address g) public constant returns (bool) {
        require(msg.sender == manager);
        return guests[g].hasStayedBefore;
    }

    /*function getGuest(address _address) public constant returns (bytes32, uint, uint, bool) {
        return (tenants[_address].name, tenants[_address].totalOwed,
                tenants[_address].paidSoFar, tenants[_address].hasVal);
    }*/

}

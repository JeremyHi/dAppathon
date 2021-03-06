import { Template } from 'meteor/templating';

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000"));
}

contractAddress = "0xd2073837341fa78ce7125833ec3cfd5eb83b6e82";
ABIArray = [{"constant":true,"inputs":[],"name":"getStayedBefore","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"checkout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"guests","outputs":[{"name":"name","type":"bytes32"},{"name":"roomNumber","type":"uint256"},{"name":"hasStayedBefore","type":"bool"},{"name":"isAtHotel","type":"bool"},{"name":"hasReservation","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"checkIn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getGuest","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"nameToAdd","type":"bytes32"},{"name":"roomNum","type":"uint256"},{"name":"_begin","type":"bytes8"},{"name":"_end","type":"bytes8"},{"name":"totalOwed","type":"uint256"}],"name":"makeReservation","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"numRooms","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"guestAddress","type":"address"},{"indexed":false,"name":"nameToAdd","type":"bytes32"}],"name":"LogAddGuest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"guestAddress","type":"address"},{"indexed":false,"name":"nameToCheckout","type":"bytes32"}],"name":"LogCheckoutGuest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"accountAddress","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogPaymentMade","type":"event"}]
;
data = "6060604052341561000f57600080fd5b604051602080610cf5833981016040528080519060200190919050505b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060028161007b9190610083565b505b50610155565b8154818355818115116100aa578183600052602060002091820191016100a991906100af565b5b505050565b6100db91905b808211156100d757600080820160006100ce91906100de565b506001016100b5565b5090565b90565b50805460008255906000526020600020908101906100fc9190610100565b5b50565b61015291905b8082111561014e57600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905550600101610106565b5090565b90565b610b91806101646000396000f30060606040523615610081576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630434ff8b1461008657806306099d69146100b35780630eda85ee146100c8578063183ff08514610145578063481c6a751461015a578063acf9a167146101af578063b586d1eb1461021a575b600080fd5b341561009157600080fd5b6100996102a4565b604051808215151515815260200191505060405180910390f35b34156100be57600080fd5b6100c66102fb565b005b34156100d357600080fd5b6100ff600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610466565b6040518086600019166000191681526020018581526020018415151515815260200183151515158152602001821515151581526020019550505050505060405180910390f35b341561015057600080fd5b6101586104c3565b005b341561016557600080fd5b61016d6106e2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101ba57600080fd5b6101e6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610708565b6040518084600019166000191681526020018315151515815260200182151515158152602001935050505060405180910390f35b61028e60048080356000191690602001909190803590602001909190803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909190803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091908035906020019091905050610857565b6040518082815260200191505060405180910390f35b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1690505b90565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160019054906101000a900460ff16151561035557600080fd5b7fddf0c54278c552c3cefdfaeaefb9b7d20bd51aa2ca61115600c2a2dd8e3a0c30336000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390a160008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160016101000a81548160ff0219169083151502179055505b565b60006020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900460ff16908060020160019054906101000a900460ff16908060020160029054906101000a900460ff16905085565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160029054906101000a900460ff16151561051d57600080fd5b7ffc4ea06d4950c2a1ba6fff68a783f902c587d4f90b4ff9167bb9d758b66ccf74336000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390a160008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160026101000a81548160ff02191690831515021790555060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160016101000a81548160ff02191690831515021790555060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff0219169083151502179055505b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561076957600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff166000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160029054906101000a900460ff169250925092505b9193909250565b60007f9681ff80e7509a85367bbe3e41c00e9a48dc4d0bedb61321690e83e6f8489fd83334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1813410156108d6573482039050610adb565b856000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001816000191690555060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160026101000a81548160ff021916908315150217905550846000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506002858154811015156109cf57fe5b906000526020600020900160005b5060000180548060010182816109f39190610ae4565b916000526020600020900160005b60408051908101604052808877ffffffffffffffffffffffffffffffffffffffffffffffff191681526020018777ffffffffffffffffffffffffffffffffffffffffffffffff1916815250909190915060008201518160000160006101000a81548167ffffffffffffffff021916908378010000000000000000000000000000000000000000000000009004021790555060208201518160000160086101000a81548167ffffffffffffffff0219169083780100000000000000000000000000000000000000000000000090040217905550505050600090505b95945050505050565b815481835581811511610b0b57818360005260206000209182019101610b0a9190610b10565b5b505050565b610b6291905b80821115610b5e57600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549067ffffffffffffffff021916905550600101610b16565b5090565b905600a165627a7a72305820b766247cc9e189c21a72a86d1f0f18699eab4d8144ec56efc912399f94165cea0029";

myContract = web3.eth.contract(ABIArray).at(contractAddress);

$(function () {
  $('#datetimepicker1').datetimepicker({format: 'MM/DD/YYYY'});

  $('#datetimepicker2').datetimepicker({
    format: 'MM/DD/YYYY',
    useCurrent: false //Important! See issue #1075
  });

  $("#datetimepicker1").on("dp.change", function (e) {
    $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
  });

  $("#datetimepicker2").on("dp.change", function (e) {
    $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
  });
});

$(document).on("click", "#roomAvailability", function(){
  for (let i = 1; i <= 100; i++) {
    let element = document.getElementById(i.toString())
    element.style.backgroundColor = "rgba(86,61,124,.15)";
    element.disabled = false;
  }

  let number = 1 + Math.floor(Math.random() * 100);
  for (let i = 0; i <= number; i++) {
    let id = 1 + Math.floor(Math.random() * 100);
    let element = document.getElementById(id.toString())
    element.style.backgroundColor = 'white';
    element.disabled = true;
  }
});

// creates tags for room number
$(function() {
  $('.col-sm-3').each(function() {
    let elem = $(this);
    elem.attr("id", elem.html());
  });
});

$(function() {
  for (let i = 1; i <= 100; i++) {
    document.getElementById(i.toString()).addEventListener("click", function(){
      if (document.getElementById(i.toString()).disabled) {
        alert("Room unavailable, please choose another.");
        return;
      }
      let checkIn = document.getElementById('checkInDate').value;
      let checkOut = document.getElementById('checkOutDate').value;

      let date1 = new Date(checkIn);
      let date2 = new Date(checkOut);
      let timeDiff = Math.abs(date2.getTime() - date1.getTime());
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (isNaN(diffDays)) {
        alert("Please pick dates for your stay");
        return;
      }

      document.getElementById('price').innerHTML = "Ξ 1.000";
    });
  }
});

$(document).on("click", "#payNow", function() {
  let name = "Gern Blanston";
  let room = 13;
  let checkInDate = document.getElementById('checkInDate').value;
  let checkOutDate = document.getElementById('checkOutDate').value;
  let price = parseInt(document.getElementById('price').innerHTML.substring(1));

  myContract.makeReservation(name, room, checkInDate, checkOutDate, price, function(error, result) {
    if(!error)
      console.log(result)
    else
      console.error(error);
  });
});

$(document).on("click", "#checkInButton", function() {
  myContract.checkIn(function(error, result) {
    if(!error)
      console.log(result)
    else
      console.error(error);
  });
});

$(document).on("click", "#checkOutButton", function() {
  myContract.checkOut(function(error, result) {
    if(!error)
      console.log(result)
    else
      console.error(error);
  });
});

import { Template } from 'meteor/templating';

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000"));
}

contractAddress = "";
ABIArray = [];
data = "";

myContract = web3.eth.contract(ABIArray).at(contractAddress);
console.log(myContract);

$(function () {
  $('#datetimepicker1').datetimepicker({format: 'DD/MM/YYYY'});

  $('#datetimepicker2').datetimepicker({
    format: 'DD/MM/YYYY',
    useCurrent: false //Important! See issue #1075
  });

  $("#datetimepicker1").on("dp.change", function (e) {
    $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
  });

  $("#datetimepicker2").on("dp.change", function (e) {
    $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
  });
});

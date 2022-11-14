var coffee = document.getElementById('coffee').value;
var bagel = document.getElementById('bagel').value;
var tea = document.getElementById('tea').value
var cTotal = coffee * 11;
var bTotal = bagel * 3;
var tTotal = tea * 7;
var btn = document.getElementById('btn')

 function add(){
     document.getElementById('total').innerHTML = 'Total:' + " " + cTotal + bTotal + tTotal
};

btn.addEventListener('submit' , add);



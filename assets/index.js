//Getting all the IDs we want to work with
var bill = document.getElementById('bill');
var percent = document.getElementById('percent');
var people = document.getElementById('people');
var submitButton = document.getElementById('submit');
var tipText = document.getElementById('tip');
var totalText = document.getElementById('total');

submitButton.addEventListener('click', () => console.log('submit button hit', bill.value, percent.value, people.value))
submitButton.addEventListener('click', calc)

console.log(bill)
// var bill2 = 77.71;
// var percent2 = 15;
// var people2 = 2;
// var tip2 = undefined;
// var answer2 = undefined;

function calc(amount){
    console.log('calc func hit');
    console.log(amount)
    //  tip = amount * (percent / 100)
    // const endTip = tip.toFixed(2);
    // const endBill = (tip + bill).toFixed(2);
    // answer = (endBill / people).toFixed(2);
    // console.log(endTip);
    // console.log(endBill); 
    // console.log(answer); 
}


// calc(bill)

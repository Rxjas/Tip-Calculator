var bill = 77.71;
var percent = 15;
var people = 2;
var tip = undefined;
var answer = undefined;

function calc(amount){
     tip = amount * (percent / 100)
    const endTip = tip.toFixed(2);
    const endBill = (tip + bill).toFixed(2);
    answer = (endBill / people).toFixed(2);
    console.log(endTip);
    console.log(endBill); 
    console.log(answer); 

}

calc(bill)

const initialPrice = document.querySelector('.initial-price');
const quantity = document.querySelector('.quantity');
const currentPrice = document.querySelector('.current-price');
const submit = document.querySelector('#btn');
const output = document.querySelector('#output');

function calculateProfitAndLoss(initial, current){
    if(current > initial){
        let profit = (current - initial);
        let profitPercentage = (profit/initial)*100;
        output.style.color = "green";
        output.innerText = "Hey, the profit is "+profit.toFixed(2)+" and the profit percentage is "+profitPercentage.toFixed(2)+"%";
    }
    else if(initial > current){
        let loss = (initial - current);
        let lossPercentage = (loss/initial)*100;
        output.style.color = "red"
        output.innerText = "Hey, the loss is "+loss.toFixed(2)+" and the loss percentage is "+lossPercentage.toFixed(2)+"%";
    }
}

function submitHandler(){
    const initial = initialPrice.value * quantity.value;
    const current = currentPrice.value * quantity.value;
    if(initial > 0 && current > 0 && quantity.value > 0){
        calculateProfitAndLoss(initial, current);
    }
    else{
        alert("Values should be greater than zero");
    }
}

submit.addEventListener("click", submitHandler);
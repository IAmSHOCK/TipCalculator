const input = document.getElementById("input");
const slider = document.getElementsByClassName("slider")[0];
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const results = document.getElementsByClassName("parentResults")[0];

slider.onchange = function(){
    let percentage = Number(slider.value);
    let showPercentage = document.getElementsByClassName("percentage")[0];
    showPercentage.innerHTML = percentage+'%';
    showPercentage.style.display = "flex";
    let bill = Number(input.value);
    console.log(bill);
    var result = bill*(percentage/100);
    console.log(result);
    result = result.toFixed(2);
    let totalValue = parseFloat(bill) + parseFloat(result);
    totalValue.toFixed(2);
    console.log(result);
    tip.innerHTML = result;
    total.innerHTML = totalValue;
    results.style.display = "flex";
}
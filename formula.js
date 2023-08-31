const weightPrice = 10;
const sizePrice = 2000;

inputWeight = document.getElementById("weight");
inputSize = document.getElementById("size");
inputOut = document.getElementById("out");
comment = document.getElementById("comment");

function setOut(){
    checkValue(inputWeight);
    checkValue(inputSize);
    let weight = inputWeight.value;
    let size = inputSize.value;
    let _w = weight * weightPrice;
    let _s = size * sizePrice;
    inputOut.value = Math.max(_w, _s);
}

function lastCheck(input){
    if (input.value === "") input.value = 0;
}

function checkValue(input){
    let value = input.value.toString();
    if (value.startsWith('0') && value.length !== 1) {
        value.slice(1);
        input.value = parseFloat(value);
    }
    if (value.startsWith('.')){
        value += '0';
        input.value = parseFloat(value);
    }
    return value;
}
const weightPrice = 10;
const sizePrice = 2000;
const wayPrice = 200;

const minWeight = 10;
const minSize = 0.01;
const minWay = 10;

inputWeight = document.getElementById("weight");
inputSize = document.getElementById("size");
inputWay = document.getElementById("way");
inputOut = document.getElementById("out");
comment = document.getElementById("comment");

initialize();

function initialize(){
    inputWeight.value = minWeight;
    inputSize.value = minSize;
    inputWay.value = minWay;
    setOut();
}

function setOut(){
    checkValue(inputWeight);
    checkValue(inputSize);
    checkValue(inputWay);
    let weight = inputWeight.value;
    let size = inputSize.value;
    let way = inputWay.value;
    let _we = weight * weightPrice;
    let _s = size * sizePrice;
    let _wa = way * wayPrice;
    inputOut.value = Math.max(_we, _s) + _wa;
}

function lastCheck(input){
    if (input.value === "") input.value = 0;
    checkAll();
    setOut();
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

function checkAll(){
    if (inputWeight.value < minWeight) inputWeight.value = minWeight;
    if (inputSize.value < minSize) inputSize.value = minSize;
    if (inputWay.value < minWay) inputWay.value = minWay;
}
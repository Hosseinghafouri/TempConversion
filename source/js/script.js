let $ = document;
let firstValue = $.querySelector(".C");
let secondValue = $.querySelector(".F");
let inputConverter = $.querySelector("#converter");
let result = $.querySelector(".result");
let convertBtn = $.querySelector(".convertButton");
let resetBtn = $.querySelector(".resetButton");
let changeBtn = $.querySelector(".changeButton");
// console.log(firstValue, secondValue, inputConverter, result, convertBtn, resetBtn, changeBtn);
////////////
function convert () {
    let inputValue = +(inputConverter.value);
    result.style.color = "";
    if ( inputConverter.placeholder === "°C") {
        let fahrenheit = (inputValue * 9/5) + 32;
        result.innerHTML = '(' + inputValue + ' * 9/5) + 32 = ' + fahrenheit;
    }else if (inputConverter.placeholder === "°F" ) {
        let celsius = (inputValue - 32) * 5/9;
        result.innerHTML = '(' + inputValue + ' - 32) * 5/9 = ' + celsius; 
    }
    if (isNaN(inputValue)) {
        result.style.color = "#e00d0d";
        result.innerHTML = "Wrong value!";
    }else if (inputConverter.value.trim() === "") {
        result.style.color = "#e00d0d";
        result.innerHTML = "Write correct value!";
    }
}
function reset () {
    inputConverter.value = "";
    result.innerHTML = "";
}
function swap () {
    if (inputConverter.placeholder === "°C") {
    $.title = "°F to °C";
    firstValue.innerHTML = "°F";
    secondValue.innerHTML = "°C";
    inputConverter.placeholder = "°F";
    inputConverter.value = "";
    result.innerHTML = "";

    }else if (inputConverter.placeholder === "°F") {
        $.title = "°C to °F";
        firstValue.innerHTML = "°C";
        secondValue.innerHTML = "°F";
        inputConverter.placeholder = "°C";
        inputConverter.value = "";
        result.innerHTML = "";
    }


}

convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", swap);
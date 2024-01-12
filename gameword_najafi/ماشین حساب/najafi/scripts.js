
var result = document.getElementById("result");
var expression = "";

function appendNumber(number) {
    expression += number;
    result.value = expression;
}

function appendOperator(operator) {
    expression += operator;
    result.value = expression;
}

function calculateResult() {
    try {
        var calculatedResult = eval(expression);
        result.value = calculatedResult;
        expression = "";
    } catch (error) {
        result.value = "Error";
    }
}

function clearResult() {
    expression = "5";
    result.value = "";
}

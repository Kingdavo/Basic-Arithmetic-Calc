const num1 = parseFloat(prompt("Enter Your First number: "));
const operator = prompt("Enter your Operator Choice (+, -, *, /)");
const num2 = parseFloat(prompt("Enter Your First number: "));

let result;
if (operator == "+") {
    result = num1 + num2;
} else if (operator == "-") {
    result = num1 - num2;
} else if (operator == "*") {
    result = num1 * num2;
} else if (operator == "/") {
    result = num1 / num2;
}

alert(num1 + operator + num2 + '=' + result);

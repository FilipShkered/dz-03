const num1 = getNum(1);
const operator = prompt('type operator: + - / *', '');
const num2 = getNum(2);

if (
    isNaN(num1)
    || isNaN(num2)
    || (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/')
) {
    alert('Wrong data. Refresh page and try again.');
} else {
    const result = calc(operator, num1, num2);

    showResult(operator, num1, num2, result);
}

function getNum(numOrder) {
    return Number(prompt(`Type the number ${numOrder}`));
}

function calc(operator, num1, num2) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return sub(num1, num2);
        case '*': return mult(num1, num2);
        case '/':
            if (num2 > 0) {
                return div(num1, num2);
            } else {
                return 'is not divisible by zero';
            }
        default: return 'select an operator';
    }
}

function showResult(operator, num1, num2, result) {
    alert(`${num1} ${operator} ${num2} = ${result}`);
}

function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}




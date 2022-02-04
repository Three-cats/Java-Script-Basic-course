/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/
function summatinon(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return summatinon(arg1, arg2);
        case '-': return subtraction(arg1, arg2);
        case '*': return multiplication(arg1, arg2);
        case '/': return division(arg1, arg2);
        default: return 'Неверная операция'
    }
}

console.log(mathOperation(3, 2, '+'));
console.log(mathOperation(3, 2, '-'));
console.log(mathOperation(3, 2, '*'));
console.log(mathOperation(3, 2, '/'));
console.log(mathOperation(3, 2, '#'));

/*
С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function power(val, pow) {
    if (pow > 0) {
        if (pow == 1) return val;
        return val * power(val, pow - 1);
    } else if (pow < 0) {
        if (pow == -1) return 1 / val;
        return 1 / val * power(val, pow + 1);
    } else if (pow == 0) return 1;
}

console.log(power(2, 4));
console.log(power(2, -4));
console.log(power(2, 0));

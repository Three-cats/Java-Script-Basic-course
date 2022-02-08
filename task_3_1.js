// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let simpleNumbers = [];
let i = 1;
while (i <= 100) {
    let dividers = [];
    let n = i;
    while (n > 0) {
        if (i % n == 0) dividers.push(n);
        n--;
    }
    if (dividers.length <= 2) simpleNumbers.push(i);
    i++;
}

console.log(simpleNumbers);

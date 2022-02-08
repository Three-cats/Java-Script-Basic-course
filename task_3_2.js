/*
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

let basket = [];

function putInBasket(id, product, price, count) {
    let choosedProduct = [id, product, price, count];
    basket.push(choosedProduct);
    return basket;
}

putInBasket(1, 'apple', 150, 3);
putInBasket(2, 'banana', 70, 3);
putInBasket(16, 'orange', 100, 4);
console.log(basket);

function countBasketPrice(basket) {
    let basketPrice = basket.map(item => item[2] * item[3]).reduce((sum, curr) => sum + curr, 0);
    return basketPrice;
}

console.log(`Стоимость Вашей корзины ${countBasketPrice(basket)} рублей`);

/*
Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

// Элементы корзины можно заменить объектами.
function Goods(id, product, price, count) {
    this.id = id;
    this.product = product;
    this.price = price;
    this.count = count;
}

let apples = new Goods(1, 'apple', 150, 3);
let bananas = new Goods(2, 'banana', 70, 3);
let oranges = new Goods(16, 'orange', 100, 4);

console.log(apples, typeof (apples));  // Goods {id: 1, product: 'apple', price: 150, count: 3}, 'object'

let basket = {
    inBasket: [],
    toBasket(choosedGoods) {
        this.inBasket.push(choosedGoods)
    },
    countBasketPrice() {
        let basketPrice = this.inBasket.reduce((sum, curr) => sum + curr.price * curr.count, 0);
        return basketPrice;
    }
}

console.log(basket.inBasket);  // []
basket.toBasket(apples);
basket.toBasket(bananas);
console.log(basket.inBasket);
// 0: Goods {id: 1, product: 'apple', price: 150, count: 3} 
// 1: Goods {id: 2, product: 'banana', price: 70, count: 3}
basket.toBasket(oranges);
console.log(`Стоимость Вашей корзины ${basket.countBasketPrice()} рублей`);
// Стоимость Вашей корзины 1060 рублей

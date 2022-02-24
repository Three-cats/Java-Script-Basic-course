function Goods(product, price, count) {
    this.product = product;
    this.priceOfOne = price;
    this.count = count;
    this.priceOfAll = this.count * this.priceOfOne
}


let apples = new Goods('apple', 150, 3);
let bananas = new Goods('banana', 70, 3);
let oranges = new Goods('orange', 100, 4);

let yourBasket = {
    basket: document.getElementById('basket'),
    inBasket: [],
    toBasket(choosedGoods) {
        this.inBasket.push(choosedGoods)
    },
    countBasketPrice() {
        let basketPrice = this.inBasket.reduce((sum, curr) => sum + curr.priceOfAll, 0);
        if (basketPrice == 0) {
            this.basket.innerHTML = 'Ваша корзина пуста';
        } else {
            this.basket.innerHTML = `В корзине: ${this.inBasket.length} товара(-ов) на сумму ${basketPrice} рублей`;
        };
    },

    run() {
        this.countBasketPrice();
    }
}

yourBasket.toBasket(apples);
yourBasket.toBasket(bananas);

yourBasket.run()

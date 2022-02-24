function Goods(product, price, count) {
    this.product = product;
    this.priceOfOne = price;
    this.count = count;
    this.priceOfAll = this.count * this.priceOfOne;

}

let products = {
    product: document.getElementById('product'),
    yourProducts: [],
    basketPrice: document.getElementById('basket'),
    toProducts() {
        this.yourProducts.push(new Goods('Яблоки', 150, 3));
        this.yourProducts.push(new Goods('Бананы', 70, 3));
        this.yourProducts.push(new Goods('Апельсины', 100, 4));
    },
    formOfPublic(good) {
        return `<div class="goods">
                    <div>Наименование: ${good.product}</div>
                    <div>Цена за 1 кг.: ${good.priceOfOne}</div>
                    <div>Количество: ${good.count}</div>
                    <div>Стоимость: ${good.priceOfAll}</div>
                </div>`;
    },
    publicGoods() {
        this.yourProducts.forEach(good => {
            this.product.insertAdjacentHTML('beforeend', this.formOfPublic(good));
        });
    },

    countBasketPrice() {
        if (this.yourProducts.length == 0) {
            this.basketPrice.innerHTML = 'Ваша корзина пуста';
        } else {
            this.basketPrice.innerHTML = `В корзине: ${this.yourProducts.length} товара(-ов) на сумму 
            ${this.yourProducts.reduce((sum, curr) => sum + curr.priceOfAll, 0)} рублей`;
        };
    },

    run() {
        this.toProducts();
        this.publicGoods();
        this.countBasketPrice();
    }
}

products.run();

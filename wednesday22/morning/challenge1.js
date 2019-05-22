console.log("Mr pickles the corgi")

//Rewrite code below using ES6 Classes

// class Food, has properties, [price, calories, title]
// fruit inherits from Food ,create apple and orange from class fruit

function Food(calories) {
    this.calories = calories;
 }
 
 function Fruit(title, price, calories) {
    Food.call(this, calories);
    this.title = title;
    this.price = price;
 };
 
 Fruit.prototype = Object.create(Food.prototype);
 
 Fruit.prototype.priceInfo = function() {
    return `Price of one ${this.title} is $${this.price}`;
 };
 
 var apple = new Fruit("Apple", 2, 150);
 
 console.log(apple.priceInfo());
 
 var orange = new Fruit("Orange", 3, 180);
 
 console.log(orange.priceInfo());
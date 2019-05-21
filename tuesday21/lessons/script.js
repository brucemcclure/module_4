console.log("Mr pickles the corgi");

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
       return this.height * this.width;         // Object level measurement
    }

    static measurement() {                      // static key word to have class level method
        return "cm";
    }
}


class Square extends Shape {

}

let sq = new Square(20, 10);
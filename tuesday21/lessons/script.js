console.log("Mr pickles the corgi");

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
       return this.height * this.width;
    }

    static measurement() {                      // static key word to have class level method
        return "cm";
    }
}

let rect = new Shape(20, 10);
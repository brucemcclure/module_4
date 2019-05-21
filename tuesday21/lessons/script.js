console.log("Mr pickles the corgi");

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
       return this.height * this.width;
    }
}

let rect = new Rectangle(20, 10);
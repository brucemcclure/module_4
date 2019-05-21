console.log("Mr Pickles the Corgi");

class Dog {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.totalWalks = 0;
    }

    speak() {
        console.log(`Woof! my name is ${this.name}`);
    }

    walk(location, distance) {
        let walkies = `${this.name} has walked from ${this.location} to ${location} it was approximately ${distance}kms`
        console.log(walkies);
        this.totalWalks += 1;
    }

    displayTotalWalks() {
        console.log(`${this.name} has taken ${this.totalWalks} walk/s`);
    }
    
}




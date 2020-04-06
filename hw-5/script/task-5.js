class Car {
    static getSpecs(car) {
        console.log(
            `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
        );
    }
    constructor({
        maxSpeed,
        speed = 0,
        isOn = false,
        distance = 0,
        price
    }) {
        this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
        this._price = price;
    }

    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        if (this.isOn) {
            if (value > this.maxSpeed) {
                this.speed = this.maxSpeed;
                console.log('Max speed is reached!!!');
            } else {
                this.speed += value;
                if (this.speed > this.maxSpeed) {
                    this.speed = this.maxSpeed;
                    console.log('Max speed is reached!!!');
                }
            }
        } else {
            console.log('Car is stopped , turn it ON before drive ');
        }
    }

    decelerate(value) {
        if (value < 0) {
            value = 0;
            console.log('Speed might be positive value , actual decelerate is 0 ');
        } else {
            this.speed -= value;
            if (this.speed < 0) {
                this.speed = 0;
                console.log('Car is not moving !!!!');
            }
        }
    }

    drive(hours) {
        if ((this.isOn = true)) {
            this.distance += hours * this.speed;
        } else console.log('Car is stopped , turn it ON before drive ');
        return this.distance;
    }
}
const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
mustang.accelerate(50);
Car.getSpecs(mustang);
mustang.turnOn();
mustang.accelerate(200);
mustang.drive(4);
Car.getSpecs(mustang);
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
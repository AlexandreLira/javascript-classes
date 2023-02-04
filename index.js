class Car {

    static alert = true

    constructor({
        color,
        brand,
        model
    }) {
        this.color = color
        this.model = model
        this.brand = brand
        this.isOn = false
        this.km = 0
        this.fuel = 10

    }


    info() {
        console.log('+-----------------------------')
        console.log('| Color....: ' + this.color)
        console.log('| Model....: ' + this.model)
        console.log('| Brand....: ' + this.brand)
        console.log('| IsOn.....: ' + this.isOn)
        console.log('| Km.......: ' + this.km)
        console.log('| Fuel.....: ' + this.fuel)

    }

    turnOn() {
        this.isOn = true
    }
    turnOff() {
        this.isOn = false
    }

    set setFuel(value) {
        this.fuel = value
    }

    get getFuel() {
        return this.fuel
    }
}

let car1 = new Car({
    color: 'red',
    brand: 'tesla',
    model: 'Model S'
})

let car2 = new Car({
    color: 'blue',
    brand: 'fiat',
    model: 'Fiat Argo'
})

car2.setFuel = 90
car2.turnOn()

const fuel = car2.getFuel

car1.info()
car2.info()

console.log(fuel)

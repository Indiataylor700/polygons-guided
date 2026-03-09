/* This class should not be accessed directly. */

class BasePolygon {
    #sides;
    constructor(sides) {
        this.#sides = sides;
    }

    get sides() {
        return this.#sides;
    }

    area() { }

    height() { }

    perimeter() { }

    interiorAngle() { 
        return (this.#sides - 2) * 180;
    }

};

module.exports = BasePolygon;
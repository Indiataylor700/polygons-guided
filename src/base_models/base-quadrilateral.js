const BasePolygon = require('./base-polygon');

/* This class should not be accessed directly */
class BaseQuadrilateral extends BasePolygon {
    #sideA;
    #sideB;
    #sideC;
    #sideD;

    constructor(sideA, sideB, sideC, sideD) {
        super(4);
        this.#sideA = sideA;
        this.#sideB = sideB;
        this.#sideC = sideC;
        this.#sideD = sideD;
    }

    get sideA() { return this.#sideA; }
    get sideB() { return this.#sideB; }
    get sideC() { return this.#sideC; }
    get sideD() { return this.#sideD; }

    area() {
        return this.#sideA * this.#sideB;
    }

    height() {
        return this.#sideA;
    }

    perimeter() {
       return this.#sideA + this.#sideB + this.#sideC + this.#sideD; 
    }
};

module.exports = BaseQuadrilateral;
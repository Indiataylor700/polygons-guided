const BasePolygon = require('./base-polygon');

/* This class should not be accessed directly. */
class BaseTriangle extends BasePolygon {
    #sideA;
    #sideB; // base of the triangle
    #sideC;

    /**
     * Measurement of the sides that should be larger than 
     * or equal to 1. One side cannot be larger than the
     * combined total of 2 sides
     * @param {number} sideA
     * @param {number} sideB
     * @param {number} sideC
    */
   
    constructor(sideA, sideB, sideC) {
        super(3);
       
        try {
            if(typeof sideA === 'number' && 
               typeof sideB === 'number' &&
               typeof sideC === 'number') {
                this.#sideA = sideA;
                this.#sideB = sideB;
                this.#sideC = sideC;
            
            } else {
                throw new Error ('Side must be a number')
            }
            
        } catch (error) {
            console.error(error.message);
        }
        this.verifyValues(sideA, sideB, sideC);
            
    }

    /**
     * @return {number} length of Side A
    */
    get sideA() { return this.#sideA; }

    /**
     * @return {number} length of Side B
    */
    get sideB() { return this.#sideB; }

    /**
     * @return {number} length of Side C
    */
    get sideC() { return this.#sideC; }

    area() {
        try {
            let answer =  .5 * this.#sideB * this.height()
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else {
                return answer.toFixed(2);
            }
        } catch (error) {
           return new Error(error.message); 
        } 
    }

    perimeter() {
        try {
            let answer =  this.#sideA + this.#sideB + this.#sideC;
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else {
                    return answer.toFixed(2);
            }
        } catch (error) {
           return new Error(error.message);
        }
    }

    verifyValues(sideA, sideB, sideC) {
        try {
            switch(true) {
                case (sideA + sideB) < sideC:
                case (sideA + sideC) < sideB:
                case (sideB + sideC) < sideA:
                    throw new Error('One side cannot be larger ' + 
                        'than the other two sides combined');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

};


module.exports = BaseTriangle;
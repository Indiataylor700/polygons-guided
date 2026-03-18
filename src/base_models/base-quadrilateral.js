const BasePolygon = require('./base-polygon');

/* This class should not be accessed directly */
class BaseQuadrilateral extends BasePolygon {
    #sideA; 
    #sideB; // base of the quadrilateral
    #sideC;
    #sideD;

    /**
     * Measurement of the sides that should be larger than
     * or equal to 1.
     * @param {number} sideA 
     * @param {number} sideB 
     * @param {number} sideC 
     * @param {number} sideD 
     */
    constructor(sideA, sideB, sideC, sideD) {
        super(4);
        try {
            if(typeof sideA === 'number' && 
               typeof sideB === 'number' &&  
               typeof sideC === 'number' &&  
               typeof sideD === 'number') {
                this.#sideA = sideA;
                this.#sideB = sideB;
                this.#sideC = sideC;
                this.#sideD = sideD;
            } else {
                throw new Error('Side must be number');
            }
        
        } catch(error) {
            console.error(error.message);
        }
        
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

    /**
     * @return {number} length of Side D
     */
    get sideD() { return this.#sideD; }

    area() {
        try {
            let answer = this.#sideA * this.#sideB;
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else {
                return answer.toFixed(2);
            }
        } catch (error) {
            return new Error(error.message);
        }
        
    }

    height() {
        return this.#sideA;
    }

    perimeter() {
       return this.#sideA + this.#sideB + this.#sideC + this.#sideD; 
    }
};

module.exports = BaseQuadrilateral;
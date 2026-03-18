const BaseTriangle = require('../base_models/base-triangle');

class Scalene extends BaseTriangle {

    /**
     * Length of the sides
     * @param {number} sideA 
     * @param {number} sideB Base of the triangle
     * @param {number} sideC 
     */
    constructor(sideA, sideB, sideC) {
        super(sideA, sideB, sideC);
    }

    /**
     * Using Heron's formula
     * @returns The area calculation of a given Scalene Triangle
     */
    area() {
        try {
            let answer = Math.sqrt(this.semiPerimeter() *
            (this.semiPerimeter() - this.sideA) *
            (this.semiPerimeter() - this.sideB) *
            (this.semiPerimeter() - this.sideC));
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else {
                return answer.toFixed(2);
            }
        } catch(error) {
            return new Error(error.message);
        }
    }

    semiPerimeter() {
        return this.perimeter() / 2;
    }

    height() {
        try {
            let value1 = this.sideA + this.sideB + this.sideC;
            let value2 = -this.sideA + this.sideB + this.sideC;
            let value3 = this.sideA - this.sideB + this.sideC;
            let value4 = this.sideA + this.sideB - this.sideC;
            let answer = .5 * Math.sqrt(value1 * value2 * value3 * value4) / this.sideB;
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else {
                return answer.toFixed(2);
            }
        } catch (error) {
            return new Error(error.message);
        } 
    }

    toString() {
        return 'Scalene Triangle';
    }
};



module.exports = Scalene;
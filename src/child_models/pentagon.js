const BasePolygon = require('../base_models/base-polygon');

class Pentagon extends BasePolygon {
    #sideLength;

    /**
     * Measurement of each side length of a pentagon
     * @param {number} sideLength 
     */
    
    constructor(sideLength) {
        super(5);
        try {
            if(typeof sideLength === 'number') {
            this.#sideLength = sideLength;
            } else {
                throw new Error('Sides must be a number');
            }
        } catch(error) {
            return new Error(error.message);
        }
        
    }

     /**
     * @return {number} length of side length
     */
    get sideLength() { return this.#sideLength; }

    area() {
        try {
            const value = this.sides * (this.sides + 
            2 * Math.sqrt(this.sides));
            let answer = .25 * Math.sqrt(value) * Math.pow(this.sideLength, 2);
                if(isNaN(answer)) {
                    throw new Error('Sides don\'t have a valid length');
                } else {
                    return answer.toFixed(2);
                }
        } catch(error) {
            return new Error(error.message);
        }
        
    }

    areaV2() {
        try {
            const value = 25 + 10 * Math.sqrt(5);
            let answer = Math.pow(this.#sideLength, 2) * Math.sqrt(value) / 4;
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else {
                return answer.toFixed(2);
            }
        } catch(error) {
            return new Error(error.message);
        }
        
    }

    height() {
        try {
            let answer = this.#sideLength * Math.sqrt(this.sides +
            2 * Math.sqrt(this.sides)) / 2;
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else {
                return answer.toFixed(2);
            }
        } catch(error) {
            return new Error(error.message);
        }
        
    }

    perimeter() {
        try {
            let answer = this.#sideLength * this.sides;
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
        return 'Pentagon Shape';
    }
};

module.exports = Pentagon;
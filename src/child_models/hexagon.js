const BasePolygon = require('../base_models/base-polygon');

class Hexagon extends BasePolygon {
    #sideLength;

    /**
     * Measurement of each side length of a hexagon
     * @param {number} sideLength 
     */
    constructor(sideLength) {
        super(6);
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

    area() {
        try {
        let answer = 3 * (Math.sqrt(3) / 2 * Math.pow(this.#sideLength,2)); 
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
            let answer = this.#sideLength * Math.sqrt(3); 
            if(isNaN(answer)) {
                throw new Error('Sides don\'t a valid length');
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
        return 'Hexagon Shape';
    }

};


module.exports = Hexagon;
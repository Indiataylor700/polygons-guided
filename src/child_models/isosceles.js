const BaseTriangle = require('../base_models/base-triangle');

class Isosceles extends BaseTriangle {

    /**
     * Length of the sides 
     * @param {number} sideA Two sides of the triangle minus the base
     * @param {number} sideB Base of the triangle
     */ 
    constructor(sideA, sideB) {
        super(sideA, sideB, sideA);
    }

   height() {
        try {
            let answer = Math.sqrt(Math.pow(this.sideA, 2) -
            (Math.pow(this.sideB, 2) / 4));
            if(isNaN(answer)) {
               throw new Error('Sides don\'t have a valid length');
            } else {
                    return answer.toFixed(2);
            }
        } catch(error) {
        return new Error(error.message)
        }
   }

    toString() {
        return 'Isosceles Triangle';
    }
};



module.exports = Isosceles;
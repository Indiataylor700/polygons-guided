const BaseQuadrilateral = require('../base_models/base-quadrilateral');

class Parallelogram extends BaseQuadrilateral {

    #angle

    /**
     * 
     * @param {number} sideLength 
     * @param {number} sideWidth 
     * @param {number} angle 
     */

    constructor(sideLength, sideWidth, angle) {
        super(sideLength, sideWidth, sideLength, sideWidth);
            try {
                 if(typeof angle === 'number') {
                this.#angle = angle;
                } else {
                throw new Error('Angle must be a number');
                }
            } catch (error) {
                console.error(error.message);
            }
        this.verifyAngle(angle);
           
    }

    area() {
        try {
            const rad = this.#angle * Math.PI / 180;
            let answer = this.sideA * this.sideB * Math.sin(rad);
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else if(rad === 0 || rad === Math.PI) {
                throw new Error('Angle must be greater than 0 or less than 180 degrees');
            }
            else {
                return answer.toFixed(2);
            }
        } catch (error) {
            return new Error(error.message);
        }
        
    }

    
    height() {
        try {
            let answer = this.area() / this.sideB;
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else {
                return answer.toFixed(2);
            }
        } catch(error) {
            return new Error(error.message);
        }
        
    }

    toString() {
        return 'Parallelogram Quadrilateral';
    }
    
    verifyAngle(angle) {
        try {
            switch(true) {
                case (this.#angle <= 0):
                case (this.#angle >= 180):
                    throw new Error('Angle must be greater than 0 and less than 180 degrees');
            }
            
        } catch (error) {
            console.error(error.message);
        }
    }
};

module.exports = Parallelogram;
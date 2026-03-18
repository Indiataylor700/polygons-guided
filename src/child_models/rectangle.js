const BaseQuadrilateral = require('../base_models/base-quadrilateral');

class Rectangle extends BaseQuadrilateral {
    /**
     * Measurement of the length and width
     * @param {number} sidelength 
     * @param {number} sidewidth Base of the rectangle 
     */
    constructor(sidelength, sidewidth) {
        super(sidelength, sidewidth, sidelength, sidewidth);
    }

    toString() {
        return 'Rectangle Quadrilateral';
    }
};

module.exports = Rectangle;
const BaseQuadrilateral = require('../base_models/base-quadrilateral');

class Square extends BaseQuadrilateral {
    /**
     * Measurement to each side length of a square
     * @param {number} sidelength 
     */
    constructor(sidelength) {
        super(sidelength, sidelength, sidelength, sidelength);
    }

    toString() {
        return 'Square Quadrilateral';
    }
};

module.exports = Square;
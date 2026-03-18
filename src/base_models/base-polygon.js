/* This class should not be accessed directly. */

class BasePolygon {
    #sides;
    /**
     * @param {number} sides Number of sides of the Polygon
     */
    constructor(sides) {
        try {
            if(typeof sides === 'number' && !isNaN(sides)) {
                this.#sides = sides;
            } else {
            throw new Error('Sides must be number');
            }
        } catch(error) {
            console.error(error.message);
        }
    
}

    /**
     * The number of sides
     * @return {number} sides
     */
    get sides() {
        return this.#sides;
    }

    /**
     * Returns the Area of a given Polygon
     * @return {number} based on a measurement
     */
    area() { }

    /**
     * Returns the Height of a give Polygon 
     * @return {number} based on measurement
     */
    height() { }

    /**
     * Returns the Perimeter of a given Polygon
     * @return {number} based on a measurement
     */
    perimeter() { }

    /**
     * Returns the Total Interior Angle of a Polygon
     * @return {number} interior angle in degrees
      */
    interiorAngle() { 
        return (this.#sides - 2) * 180;
    }

};

module.exports = BasePolygon;
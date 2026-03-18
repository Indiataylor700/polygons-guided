
exports.processPolygon = (polygon) => {
    console.log(`The height of this ${polygon} is ${polygon.height()}`);
    console.log(`The perimeter of this ${polygon} is ${polygon.perimeter()}`);
    console.log(`The area of this ${polygon} is ${polygon.area()}`);
    console.log(`The interior angle of this ${polygon} is ${polygon.interiorAngle()}`);
}

function getPrecision(value) {
     return value.toFixed(2);
}

/* Validation Notes:
Side length should be larger or equal to 1

Triangles : Ensure than one side is not longer 
        than the other two sides combined
Number of Sides: validate not NaN
Side length: number type validation 
Parallelogram angle: greater than 0 and less than 180 */

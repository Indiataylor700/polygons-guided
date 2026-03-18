const Square = require('./child_models/square');
const Rectangle = require('./child_models/rectangle');
const Parallelogram = require('./child_models/parallelogram');
const Equilateral = require('./child_models/equilateral');
const Isosceles = require('./child_models/isosceles');
const Scalene = require('./child_models/scalene');
const Hexagon = require('./child_models/hexagon');
const Pentagon = require('./child_models/pentagon');

const Controller = require('./controller/controller');

/* Entry level to this project */
function main() {
    //Controller.processPolygon(new Square(8));
    //Controller.processPolygon(new Rectangle(20, 43));
    Controller.processPolygon(new Parallelogram(16, 19, 0));
    //Controller.processPolygon(new Equilateral(42));
    //Controller.processPolygon(new Isosceles(12, 21));
    //Controller.processPolygon(new Scalene(21, 43, 63));
    //Controller.processPolygon(new Hexagon(54));
    //Controller.processPolygon(new Pentagon(14));
}

main();

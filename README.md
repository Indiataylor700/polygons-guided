# polygons-guided
Polygon Guided Project
📌 Project Overview
polygons-guided is a JavaScript geometry learning project about polygon shape models and math property validations.

Provides base classes: Polygon, Quadrilateral, Triangle.
Implements concrete shapes: Equilateral, Isosceles, Scalene, Rectangle, Square, Parallelogram, Pentagon, Hexagon.
Includes a controller module for orchestrating model behavior.
📄 Project Reference
A design and requirements reference is included as a PDF:

Guided Project Polygons.pdf
Open this file to review the original guided project specification and geometry rule set.

🗂️ Repository Structure
src/base_models/
base-polygon.js
base-quadrilateral.js
base-triangle.js
src/child_models/
equilateral.js, isosceles.js, scalene.js
rectangle.js, square.js, parallelogram.js
pentagon.js, hexagon.js
src/controller/controller.js
⚙️ Setup
Clone repository:
git clone <repo-url>
cd polygons-guided/polygons-guided
Install dependencies (if used):
npm install
The project is built to run in VS Code with the Code Runner extension:
Install Code Runner (by Jun Han).
Open a source file (e.g., index.js).
Click Run Code or press Ctrl+Alt+N.
Run tests or usage script (if available):
npm test
🚀 Usage
Import the desired shape class and create instances, for example:
const Equilateral = require('./src/child_models/equilateral');
const eq = new Equilateral(5);
console.log(eq.area());
Use the controller module for higher-level operations if implemented.
🧪 Testing
Add or update test files in the project root (e.g. test/) according to your test runner (Jest/Mocha). If existing tests are present, run:

npm test
🤝 Contributing
Fork the repository
Create feature branch
Commit & push
Open a pull request
const inquirer = require('inquirer');


const fs = require('fs/promises')
const Triangle = require('./lib/triangle.js')
const Square = require('./lib/square.js')
const Circle = require('./lib/circle.js')


//Enter in the list of questions

const questions = [

  {
    name: "logoInitials",
    type: "input",
    message: "Please enter up to 3 initials"
  },
  {
    name: "logoColor",
    type: "input",
    message: "Please enter your text color keyword"
  },

  {
    name: "logoShape",
    type: "list",
    message: "Please choose a shape",
    choices: ['circle', 'triangle', 'square'],

  },

  {
    name: "logoShapeColor",
    type: "input",
    message: "Please enter in the shapes color",

  },
]

//this function writes the logo.svg file//

function writeToFile(fileName, data) {
  // Write the file...
  fs.writeFile(fileName, data)
  .then(() => {
      console.log("Generated logo.svg");
  })
  .catch((error) => {
    console.log(error);
  });



}

function init() {

  // Ask the questions....
  inquirer
    .prompt(questions)

    .then((answers) => {
      let svg = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">\n`

      // Customize the svg data based on the answers...
      // Add a triangle, circle or square with a color
      let shape = null;
      if (answers.logoShape == "triangle") {
        shape = new Triangle(answers.logoShapeColor);
      }
      else if (answers.logoShape == "circle") {
        shape = new Circle(answers.logoShapeColor);
      }
      else if (answers.logoShape == "square") {
        shape = new Square(answers.logoShapeColor);
      }

      // Set the shape's color new Circle

      // Call render to get the svg code
      svg += shape.render()

      // Add text with a color 
      svg += `\n<text x="150" y="120" font-size="40" dominant-bassline="middle" text-anchor="middle" fill="${answers.logoColor}">${answers.logoInitials}</text>\n`

      svg += "</svg>"

      
      return svg;

    }).then((svg) => {
      writeToFile('./examples/logo.svg', svg)
    })

}

init()



// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

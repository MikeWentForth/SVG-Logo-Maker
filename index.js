// const inquirer = require('inquirer');
import inquirer from "inquirer"
import fs from "fs"
import triangle from "./lib/triangle.js"

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
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
    }
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
        shape = new Triangle();
      } // add options for other shapes XXXXXXX

      // Set the shape's color
      shape.setColor(answers.logoShapeColor)

      // Call render to get the svg code
      svg += shape.render()

      // Add text with a color XXXXXXXXXX



      svg += "</svg>"

      writeToFile('logo.svg', svg)

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

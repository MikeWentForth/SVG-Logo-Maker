const Shape = require('./shape');

class Triangle extends Shape{

  constructor(color = "black") {
    super(color);
  }

  // // sets the color for the object
  // setColor(newColor) {
  //   this.color = newColor;
  // }

  // returns a svg-formatted string for the triangle object
  render() {
    return `<polygon points="250,60 100,400 400,400" fill="${this.color}" />`
  }
}

module.exports = Triangle;
const Shape = require('./shape');

class Triangle extends Shape{

  constructor(color) {
    super(color);
  }

  // returns a svg-formatted string for the triangle object
  render() {
    return `<polygon points= "150,0 0,300 300,300" fill="${this.color}" />`
  }
}

module.exports = Triangle;
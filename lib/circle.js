class Circle {

  constructor() {
    this.color = "black";
  }

  // sets the color for the object
  setColor(newColor) {
    this.color = newColor;
  }

  // returns a svg-formatted string for the triangle object
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`
  }

}

module.exports = Circle;
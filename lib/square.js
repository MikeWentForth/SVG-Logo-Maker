class Square {

  constructor() {
    this.color = "black";
  }

  // sets the color for the object
  setColor(newColor) {
    this.color = newColor;
  }

  // returns a svg-formatted string for the triangle object
  render() {
    return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`
  }
}



module.exports = Square;
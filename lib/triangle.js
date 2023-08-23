export default class Triangle {

  constructor() {
    this.color = "black";
  }

  // sets the color for the object
  setColor(newColor) {
    this.color = newColor;
  }

  // returns a svg-formatted string for the triangle object
  render() {
    return `<polygon points="250,60 100,400 400,400" fill="${this.color}"/>`
  }
}
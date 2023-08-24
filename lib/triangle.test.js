const Triangle = require('./triangle.js');

// const Triangle = require("./triangle.js")
describe('Triangle', () => {
  describe('Svg logo for Triangle', () => {
    it('should return the correct svg logo for a Triangle', () => {
      const expectedSvgLogo = '<polygon points="150,0 0,300 300,300"fill="${this.color}" />';
      const actualSvgLogo = new Triangle().render();

      expect(actualSvgLogo).toEqual(expectedSvgLogo);
    })
  })
})
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="250,60 100,400 400,400" fill="blue" />');


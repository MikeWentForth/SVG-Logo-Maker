describe('Circle', () => {
  describe('Svg logo for Circle', () => {
    it('should return the correct svg logo for a Circle', () => {
      const expectedSvgLogo = `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
      const actualSvgLogo = new Circle().render();

      expect(actualSvgLogo).toEqual(expectedSvgLogo);
    })
  })
})
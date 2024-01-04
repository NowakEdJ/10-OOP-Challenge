const { Circle, Square, Triangle } = require('./shapes');

describe('Shape Tests', () => {
  test('Circle with specified color should render', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="50" cy="50" r="40" fill="red" />');
  });

  test('Square with specified color should render', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect width="80" height="80" fill="green" />');
  });

  test('Triangle with specified color should render', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});
const multi = require('./multi');

test('multi 10 * 3 to equal 30', () => {
  expect(multi(10, 3)).toBe(30);
});
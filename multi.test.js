const multi = require('./multi');

test('multi 10 * 3 to equal 30', () => {
  expect(multi(10, 3)).toBe(30);
});

test('multi 1.5 * 3 to equal 4.5', () => {
    expect(multi(1.5, 3)).toBe(4.5);
  });
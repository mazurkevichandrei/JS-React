const sum = require('sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 2.5 to equal 7.5', () => {
    expect(sum(5, 2.5)).toBe(7.5);
  });
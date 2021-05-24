const sub = require('sub');

test('sub 10 - 3 to equal 7', () => {
  expect(sub(10, 3)).toBe(7);
});

test('sub 15 - 3.5 to equal 11.5', () => {
    expect(sub(15, 3.5)).toBe(11.5);
  });
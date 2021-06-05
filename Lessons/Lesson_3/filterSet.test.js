const filterArr = require('filterSetToTest');

test("filter arr ['nap', 'pan', 'apn', 'hi'] to ['anp', 'hi']", () => {
  expect(filterArr(['nap', 'pan', 'apn','hi']).join('')).toBe("anphi");
});
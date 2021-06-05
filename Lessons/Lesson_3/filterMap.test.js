const filterArrMap = require('filterMapToTest');

test("filter arr ['nap', 'pan', 'apn', 'hi'] to ['anp', 'hi']", () => {
  expect(filterArrMap(['nap', 'pan', 'apn','hi']).join('')).toBe("anphi");
});
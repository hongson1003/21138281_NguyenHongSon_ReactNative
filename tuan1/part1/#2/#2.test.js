// test.js
const { compareBMI } = require('./main');

test('Correct output message for BMI comparison - Data 1', () => {
  console.log = jest.fn();
  compareBMI(78, 1.69, 92, 1.95);
  expect(console.log).toHaveBeenCalledWith("Mark's BMI (27.3) is higher than John's (24.2)!");
});

test('Correct output message for BMI comparison - Data 2', () => {
  console.log = jest.fn();
  compareBMI(95, 1.88, 85, 1.76);
  expect(console.log).toHaveBeenCalledWith("John's BMI (27.4) is higher than Mark's (26.9)!");
});

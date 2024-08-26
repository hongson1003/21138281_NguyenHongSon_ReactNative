// test.js
const { calculateBMI, compareBMI } = require('./main');

test('Calculate BMI correctly', () => {
  expect(calculateBMI(78, 1.69)).toBeCloseTo(27.309, 3);
  expect(calculateBMI(92, 1.95)).toBeCloseTo(24.194, 3);
  expect(calculateBMI(95, 1.88)).toBeCloseTo(26.878, 3);
  expect(calculateBMI(85, 1.76)).toBeCloseTo(27.441, 3);
});

test('Compare BMI correctly - Data 1', () => {
  const result = compareBMI(78, 1.69, 92, 1.95);
  expect(result.markBMI).toBeCloseTo(27.309, 3);
  expect(result.johnBMI).toBeCloseTo(24.194, 3);
  expect(result.markHigherBMI).toBe(true);
});

test('Compare BMI correctly - Data 2', () => {
  const result = compareBMI(95, 1.88, 85, 1.76);
  expect(result.markBMI).toBeCloseTo(26.878, 3);
  expect(result.johnBMI).toBeCloseTo(27.441, 3);
  expect(result.markHigherBMI).toBe(false);
});

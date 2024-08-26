// test.js
const { calculateAverage, determineWinner } = require('./main');

test('Calculate average correctly', () => {
  expect(calculateAverage(96, 108, 89)).toBeCloseTo(97.67, 2);
  expect(calculateAverage(109, 95, 123)).toBeCloseTo(109, 2);
});

test('Determine winner correctly - Data 1', () => {
  const dolphinsAvg = calculateAverage(96, 108, 89);
  const koalasAvg = calculateAverage(88, 91, 110);
  expect(determineWinner(dolphinsAvg, koalasAvg)).toBe('No team wins the trophy as neither meets the minimum score of 100.');
});

test('Determine winner correctly - Bonus 1', () => {
  const dolphinsAvg = calculateAverage(97, 112, 101);
  const koalasAvg = calculateAverage(109, 95, 123);
  expect(determineWinner(dolphinsAvg, koalasAvg)).toBe('Koalas win with an average score of 109.0!');
});

test('Determine winner correctly - Bonus 2', () => {
  const dolphinsAvg = calculateAverage(97, 112, 101);
  const koalasAvg = calculateAverage(109, 95, 106);
  expect(determineWinner(dolphinsAvg, koalasAvg)).toBe('Koalas win with an average score of 103.3!');
});

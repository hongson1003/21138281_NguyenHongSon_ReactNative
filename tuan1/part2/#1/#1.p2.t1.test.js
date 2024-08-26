const { calcAverage, checkWinner } = require('./main');

// Test hàm tính trung bình
test('Calculate average correctly', () => {
  expect(calcAverage(44, 23, 71)).toBeCloseTo(46.0, 1);
  expect(calcAverage(65, 54, 49)).toBeCloseTo(56.0, 1);
  expect(calcAverage(85, 54, 41)).toBeCloseTo(60.0, 1);
  expect(calcAverage(23, 34, 27)).toBeCloseTo(28.0, 1);
});

// Test hàm kiểm tra đội chiến thắng
test('Check winner correctly - Data 1', () => {
  console.log = jest.fn(); // Mock console.log
  checkWinner(46.0, 56.0); // Dolphins: 46.0, Koalas: 56.0
  expect(console.log).toHaveBeenCalledWith('No team wins');
});

test('Check winner correctly - Data 2', () => {
  console.log = jest.fn(); // Mock console.log
  checkWinner(60.0, 28.0); // Dolphins: 60.0, Koalas: 28.0
  expect(console.log).toHaveBeenCalledWith('Dolphins win (60 vs. 28)');
});

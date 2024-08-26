const { calcTip, calcAverage, bills, tips, totals, averageTotal } = require('./main');

// Kiểm tra hàm tính tiền tip
test('Calculate tip correctly', () => {
  expect(calcTip(22)).toBe(22 * 0.20); // 4.4
  expect(calcTip(295)).toBe(295 * 0.15); // 44.25
  expect(calcTip(176)).toBe(176 * 0.15); // 26.4
  expect(calcTip(440)).toBe(440 * 0.20); // 88.0
  expect(calcTip(37)).toBe(37 * 0.20); // 7.4
});

// Kiểm tra mảng tips và totals
test('Calculate tips and totals correctly', () => {
  expect(tips).toEqual([
    4.4, 44.25, 26.4, 88, 7.4, 15.75, 2, 220, 12.9, 7.8
  ]);
  expect(totals).toEqual([
    26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8
  ]);
});

// Kiểm tra hàm tính trung bình
test('Calculate average correctly', () => {
  expect(calcAverage(totals)).toBeCloseTo(160.64, 2); // Tính trung bình của mảng totals
});

const { calcTip, bills, tips, total } = require('./main');

test('Calculate tip correctly', () => {
  expect(calcTip(100)).toBe(15); // 100 * 0.15 = 15
  expect(calcTip(555)).toBe(111); // 555 * 0.20 = 111
  expect(calcTip(44)).toBe(8.8); // 44 * 0.20 = 8.8
});

test('Bills array contains correct values', () => {
  expect(bills).toEqual([125, 555, 44]);
});

test('Tips array contains correct values', () => {
  expect(tips).toEqual([18.75, 111, 8.8]);
});

test('Total array contains correct values', () => {
  expect(total).toEqual([143.75, 666, 52.8]);
});

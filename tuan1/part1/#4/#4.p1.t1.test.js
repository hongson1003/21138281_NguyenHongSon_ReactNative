const { calculateTip, printBillDetails } = require('./main');

// Kiểm thử tính tiền tip cho các giá trị hóa đơn khác nhau
test('Calculate tip for a bill between 50 and 300', () => {
  expect(calculateTip(275)).toBeCloseTo(41.25, 2); // 275 * 0.15 = 41.25
});

test('Calculate tip for a bill less than 50', () => {
  expect(calculateTip(40)).toBeCloseTo(8.00, 2); // 40 * 0.20 = 8.00
});

test('Calculate tip for a bill greater than 300', () => {
  expect(calculateTip(430)).toBeCloseTo(86.00, 2); // 430 * 0.20 = 86.00
});

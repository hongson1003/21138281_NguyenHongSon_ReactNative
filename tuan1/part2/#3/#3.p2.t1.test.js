const { Mark, John, compareBMI } = require('./main');

test('Calculate and compare BMI correctly', () => {
  // Tính BMI
  Mark.calcBMI();
  John.calcBMI();
  
  // Kiểm tra giá trị BMI
  expect(Mark.bmi).toBeCloseTo(27.3, 1); // 78 / (1.69 ** 2) = 27.309
  expect(John.bmi).toBeCloseTo(24.2, 1); // 92 / (1.95 ** 2) = 24.174

  // Mock console.log và kiểm tra thông báo
  console.log = jest.fn(); // Mock console.log
  compareBMI();
  
  expect(console.log).toHaveBeenCalledWith("Mark Miller's BMI (27.3) is higher than John Smith's (24.2)!");
});

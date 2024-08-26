const { printForecast } = require('./main');

// Kiểm tra hàm với dữ liệu
test('printForecast with data1', () => {
  // Tạo spy để kiểm tra console.log
  console.log = jest.fn();
  printForecast([17, 21, 23]);
  expect(console.log).toHaveBeenCalledWith('... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ... ');
});

test('printForecast with data2', () => {
  // Tạo spy để kiểm tra console.log
  console.log = jest.fn();
  printForecast([12, 5, -5, 0, 4]);
  expect(console.log).toHaveBeenCalledWith('... 12ºC in 1 days ... 5ºC in 2 days ... -5ºC in 3 days ... 0ºC in 4 days ... 4ºC in 5 days ... ');
});

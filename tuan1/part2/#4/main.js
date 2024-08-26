// Hàm tính tiền tip
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Dữ liệu đầu vào
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Mảng để lưu trữ tiền tip và tổng số tiền
const tips = [];
const totals = [];

// Tính toán tiền tip và tổng số tiền cho từng hóa đơn
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

// Hàm tính trung bình của các giá trị trong mảng
const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// Tính trung bình của mảng tổng số tiền
const averageTotal = calcAverage(totals);

// Xuất kết quả ra console
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);
console.log('Average Total:', averageTotal);

// Export các hàm và dữ liệu để kiểm thử
module.exports = {
  calcTip,
  calcAverage,
  bills,
  tips,
  totals,
  averageTotal
};

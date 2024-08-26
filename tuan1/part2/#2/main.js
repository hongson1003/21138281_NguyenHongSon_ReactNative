// Hàm tính tiền tip dựa trên giá trị hóa đơn
const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
  };
  
  // Dữ liệu hóa đơn
  const bills = [125, 555, 44];
  
  // Tính toán tiền tip cho từng hóa đơn
  const tips = bills.map(bill => calcTip(bill));
  
  // Tính tổng giá trị (hóa đơn + tiền tip)
  const total = bills.map((bill, index) => bill + tips[index]);
  
  // Xuất ra kết quả
  console.log('Bills:', bills);
  console.log('Tips:', tips);
  console.log('Total:', total);
  
  // Export các giá trị để kiểm thử
  module.exports = {
    calcTip,
    bills,
    tips,
    total
  };
  
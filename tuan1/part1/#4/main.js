// Hàm tính tiền tip
const calculateTip = (bill) => {
    // Sử dụng toán tử điều kiện để tính tiền tip
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  // Hàm để in thông tin hóa đơn, tiền tip và tổng giá trị
  const printBillDetails = (bill) => {
    const tip = calculateTip(bill);
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
  };
  
  // Export các hàm để có thể sử dụng trong tệp kiểm thử
  module.exports = {
    calculateTip,
    printBillDetails
  };
  
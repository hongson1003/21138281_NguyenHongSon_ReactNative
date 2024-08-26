// Hàm tạo dự báo thời tiết
const printForecast = (arr) => {
    let forecastString = '... ';
    
    // Duyệt qua từng nhiệt độ trong mảng
    for (let i = 0; i < arr.length; i++) {
      // Thêm nhiệt độ và ngày vào chuỗi dự báo
      forecastString += `${arr[i]}ºC in ${i + 1} days ... `;
    }
    
    // Xuất chuỗi dự báo ra console
    console.log(forecastString);
  };
  
  // Dữ liệu kiểm thử
  const data1 = [17, 21, 23];
  const data2 = [12, 5, -5, 0, 4];
  
  // Kiểm thử hàm với dữ liệu
  printForecast(data1);
  printForecast(data2);
  
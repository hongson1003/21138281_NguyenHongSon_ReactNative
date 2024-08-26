// Hàm tính trung bình của 3 điểm số
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
  };
  
  // Hàm kiểm tra đội nào thắng
  const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log('No team wins');
    }
  };
  
  // Export các hàm để có thể sử dụng trong tệp kiểm thử
  module.exports = {
    calcAverage,
    checkWinner
  };
  
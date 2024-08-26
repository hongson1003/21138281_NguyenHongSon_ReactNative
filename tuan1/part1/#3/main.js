// main.js
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
  }
  
  function determineWinner(dolphinsAvg, koalasAvg, minScore = 100) {
    if (dolphinsAvg >= minScore && dolphinsAvg > koalasAvg) {
      return `Dolphins win with an average score of ${dolphinsAvg.toFixed(1)}!`;
    } else if (koalasAvg >= minScore && koalasAvg > dolphinsAvg) {
      return `Koalas win with an average score of ${koalasAvg.toFixed(1)}!`;
    } else if (dolphinsAvg >= minScore && koalasAvg >= minScore && dolphinsAvg === koalasAvg) {
      return `It's a draw with both teams having an average score of ${dolphinsAvg.toFixed(1)}!`;
    } else {
      return `No team wins the trophy as neither meets the minimum score of ${minScore}.`;
    }
  }
  
  module.exports = { calculateAverage, determineWinner };
  
// main.js

// Example game data
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5
    }
  };
  
  // Task 1: Print each player and their goal number
  game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
  });
  
  // Task 2: Calculate and log the average odd
  const odds = Object.values(game.odds);
  const averageOdd = odds.reduce((acc, odd) => acc + odd, 0) / odds.length;
  console.log(`Average odd: ${averageOdd}`);
  
  // Task 3: Print formatted odds
  console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
  console.log(`Odd of draw: ${game.odds.draw}`);
  console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
  
  // Task 4: Create an object for scorers
  const scorers = game.scored.reduce((acc, player) => {
    acc[player] = (acc[player] || 0) + 1;
    return acc;
  }, {});
  
  console.log('Scorers:', scorers);
  
  // Exporting functions and variables for testing
  module.exports = {
    game,
    averageOdd,
    scorers
  };
  
// main.js

// Example player data
const players1 = [
    'Neuer', 'Pavard', 'Hernandez', 'Upamecano', 'Davies',
    'Kimmich', 'Goretzka', 'Müller', 'Coman', 'Lewandowski', 'Tolisso'
  ];
  const players2 = [
    'Kasper Schmeichel', 'Ricardo Pereira', 'Jonny Evans', 'Caglar Soyuncu', 'Luke Thomas',
    'Wilfred Ndidi', 'Youri Tielemans', 'James Maddison', 'Harvey Barnes', 'Jamie Vardy', 'Ayoze Pérez'
  ];
  
  // Task 2
  const gk = players1[0]; // Goalkeeper
  const fieldPlayers = players1.slice(1); // Field players
  
  // Task 3
  const allPlayers = [...players1, ...players2];
  
  // Task 4
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // Task 5
  const game = {
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5
    },
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'] // Example scored data
  };
  const { team1, draw, team2 } = game.odds;
  
  // Task 6
  const printGoals = (...players) => {
    console.log(`${players.length} goals scored`);
    players.forEach(player => console.log(player));
  };
  
  // Task 7
  const mostLikelyToWin = (team1 < team2 && team1 < draw && 'Team 1') ||
                          (team2 < team1 && team2 < draw && 'Team 2') ||
                          (draw < team1 && draw < team2 && 'Draw');
  
  console.log(`The team most likely to win is: ${mostLikelyToWin}`);
  
  // Exporting functions for testing
  module.exports = {
    gk,
    fieldPlayers,
    allPlayers,
    players1Final,
    team1,
    draw,
    team2,
    printGoals,
    mostLikelyToWin
  };
  
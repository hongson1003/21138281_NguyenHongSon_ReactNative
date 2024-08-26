// test/main.test.js

const {
    gk,
    fieldPlayers,
    allPlayers,
    players1Final,
    team1,
    draw,
    team2,
    printGoals,
    mostLikelyToWin
  } = require('./main');
  
  describe('Football Betting App Tests', () => {
    
    test('Goalkeeper and field players are correctly identified', () => {
      expect(gk).toBe('Neuer');
      expect(fieldPlayers).toEqual([
        'Pavard', 'Hernandez', 'Upamecano', 'Davies',
        'Kimmich', 'Goretzka', 'Müller', 'Coman', 'Lewandowski', 'Tolisso'
      ]);
    });
  
    test('All players array includes both teams', () => {
      expect(allPlayers).toEqual([
        'Neuer', 'Pavard', 'Hernandez', 'Upamecano', 'Davies',
        'Kimmich', 'Goretzka', 'Müller', 'Coman', 'Lewandowski', 'Tolisso',
        'Kasper Schmeichel', 'Ricardo Pereira', 'Jonny Evans', 'Caglar Soyuncu', 'Luke Thomas',
        'Wilfred Ndidi', 'Youri Tielemans', 'James Maddison', 'Harvey Barnes', 'Jamie Vardy', 'Ayoze Pérez'
      ]);
    });
  
    test('Final team includes substitute players', () => {
      expect(players1Final).toEqual([
        'Neuer', 'Pavard', 'Hernandez', 'Upamecano', 'Davies',
        'Kimmich', 'Goretzka', 'Müller', 'Coman', 'Lewandowski', 'Tolisso',
        'Thiago', 'Coutinho', 'Perisic'
      ]);
    });
  
    test('Odds are correctly extracted', () => {
      expect(team1).toBe(1.33);
      expect(draw).toBe(3.25);
      expect(team2).toBe(6.5);
    });
  
    test('printGoals function prints the correct output', () => {
      console.log = jest.fn(); // Mock console.log
  
      printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
      expect(console.log).toHaveBeenCalledWith('4 goals scored');
      expect(console.log).toHaveBeenCalledWith('Davies');
      expect(console.log).toHaveBeenCalledWith('Muller');
      expect(console.log).toHaveBeenCalledWith('Lewandowski');
      expect(console.log).toHaveBeenCalledWith('Kimmich');
  
      printGoals(...game.scored);
      expect(console.log).toHaveBeenCalledWith('4 goals scored');
      expect(console.log).toHaveBeenCalledWith('Davies');
      expect(console.log).toHaveBeenCalledWith('Muller');
      expect(console.log).toHaveBeenCalledWith('Lewandowski');
      expect(console.log).toHaveBeenCalledWith('Kimmich');
    });
  
    test('Team most likely to win is identified correctly', () => {
      expect(mostLikelyToWin).toBe('Team 1');
    });
  
  });
  
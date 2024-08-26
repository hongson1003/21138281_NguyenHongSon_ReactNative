// test/main.test.js

const { game, averageOdd, scorers } = require('./main');

describe('Football Betting App Tests', () => {
  
  test('Players and their goal numbers are printed correctly', () => {
    console.log = jest.fn(); // Mock console.log

    game.scored.forEach((player, index) => {
      expect(console.log).toHaveBeenCalledWith(`Goal ${index + 1}: ${player}`);
    });
  });

  test('Average odd is calculated correctly', () => {
    expect(averageOdd).toBeCloseTo((1.33 + 3.25 + 6.5) / 3);
  });

  test('Odds are printed in a formatted way', () => {
    console.log = jest.fn(); // Mock console.log

    expect(console.log).toHaveBeenCalledWith(`Odd of victory Bayern Munich: 1.33`);
    expect(console.log).toHaveBeenCalledWith(`Odd of draw: 3.25`);
    expect(console.log).toHaveBeenCalledWith(`Odd of victory Borrussia Dortmund: 6.5`);
  });

  test('Scorers object is created correctly', () => {
    expect(scorers).toEqual({
      Davies: 1,
      Muller: 1,
      Lewandowski: 1,
      Kimmich: 1
    });
  });

});

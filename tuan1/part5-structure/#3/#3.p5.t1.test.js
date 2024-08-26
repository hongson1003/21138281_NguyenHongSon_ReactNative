// test/main.test.js

const { gameEvents, events, averageTime } = require('./main');

describe('Football Betting App Game Events Tests', () => {

  test('Events array should contain unique events', () => {
    expect(events).toEqual(['⚽ GOAL', '� Substitution', '� Red card', '� Yellow card']);
  });

  test('Yellow card event should be removed', () => {
    expect(gameEvents.has(64)).toBeFalsy();
  });

  test('Average time between events should be computed correctly', () => {
    const totalEvents = gameEvents.size;
    const computedAverageTime = 90 / totalEvents;
    expect(averageTime).toBeCloseTo(computedAverageTime);
  });

  test('Events should be logged with the correct half of the game', () => {
    const firstHalfEvents = [
      [17, '⚽ GOAL'],
      [36, '� Substitution'],
      [47, '⚽ GOAL'],
      [61, '� Substitution']
    ];

    const secondHalfEvents = [
      [69, '� Red card'],
      [70, '� Substitution'],
      [72, '� Substitution'],
      [76, '⚽ GOAL'],
      [80, '⚽ GOAL'],
      [92, '� Yellow card']
    ];

    firstHalfEvents.forEach(([minute, event]) => {
      expect(gameEvents.get(minute)).toBe(event);
    });

    secondHalfEvents.forEach(([minute, event]) => {
      expect(gameEvents.get(minute)).toBe(event);
    });
  });
});

// main.js

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
  ]);
  
  // Task 1: Create an array 'events' of different game events (no duplicates)
  const events = [...new Set(gameEvents.values())];
  console.log('Events:', events);
  
  // Task 2: Remove the yellow card from minute 64
  gameEvents.delete(64);
  
  // Task 3: Compute and log the average time between events
  const totalEvents = gameEvents.size;
  const averageTime = 90 / totalEvents;
  console.log(`An event happened, on average, every ${averageTime} minutes`);
  
  // Task 4: Loop over gameEvents and log each element with the half of the game
  gameEvents.forEach((event, minute) => {
    const period = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${period}] ${minute}: ${event}`);
  });
  
  // Exporting variables for testing
  module.exports = {
    gameEvents,
    events,
    averageTime
  };
  
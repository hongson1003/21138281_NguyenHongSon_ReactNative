// Initial array of dogs with their weights, current food intake, and owners
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
  ];
  
  // Task 1: Calculate the recommended food portion for each dog
  dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28); // Adding recommended food portion to the object
  });
  
  // Task 2: Find Sarah's dog and log if it's eating too much or too little
  const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
  if (sarahsDog.curFood > sarahsDog.recommendedFood * 1.1) {
    console.log("Sarah's dog is eating too much.");
  } else if (sarahsDog.curFood < sarahsDog.recommendedFood * 0.9) {
    console.log("Sarah's dog is eating too little.");
  } else {
    console.log("Sarah's dog is eating an okay amount.");
  }
  
  // Task 3: Create arrays for owners of dogs who eat too much and too little
  const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
    .flatMap(dog => dog.owners);
  
  const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
    .flatMap(dog => dog.owners);
  
  // Task 4: Log strings to the console
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  // Task 5: Log whether any dog is eating exactly the recommended amount of food
  const exactFood = dogs.some(dog => dog.curFood === dog.recommendedFood);
  console.log(`Is there a dog eating exactly the recommended amount of food? ${exactFood}`);
  
  // Task 6: Log whether any dog is eating an okay amount of food (between 90% and 110% of the recommended portion)
  const eatingOkay = dogs.some(
    dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1
  );
  console.log(`Is there a dog eating an okay amount of food? ${eatingOkay}`);
  
  // Task 7: Create an array of dogs that are eating an okay amount of food
  const dogsEatingOkay = dogs.filter(
    dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1
  );
  console.log('Dogs eating an okay amount of food:', dogsEatingOkay);
  
  // Task 8: Create a shallow copy of the dogs array and sort it by recommended food portion in ascending order
  const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log('Dogs sorted by recommended food portion:', sortedDogs);
  
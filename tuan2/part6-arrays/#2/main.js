function calcAverageHumanAge(ages) {
    // 1. Convert dog ages to human ages
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  
    // 2. Exclude dogs that are less than 18 human years old
    const adults = humanAges.filter(age => age >= 18);
  
    // 3. Calculate the average age
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  
    return average;
  }
  
  // Test data 1
  const data1 = [5, 2, 4, 1, 15, 8, 3];
  console.log(calcAverageHumanAge(data1)); // Output the average human age
  
  // Test data 2
  const data2 = [16, 6, 10, 5, 6, 1, 4];
  console.log(calcAverageHumanAge(data2)); // Output the average human age
  
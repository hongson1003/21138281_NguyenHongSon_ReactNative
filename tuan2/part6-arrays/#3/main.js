const calcAverageHumanAge = ages => 
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))  // Convert dog age to human age
      .filter(humanAge => humanAge >= 18)  // Filter out dogs younger than 18 human years
      .reduce((acc, age, i, arr) => acc + age / arr.length, 0);  // Calculate the average
  
  // Test data 1
  const data1 = [5, 2, 4, 1, 15, 8, 3];
  console.log(calcAverageHumanAge(data1));  // Output: 44
  
  // Test data 2
  const data2 = [16, 6, 10, 5, 6, 1, 4];
  console.log(calcAverageHumanAge(data2));  // Output: 47.33
  
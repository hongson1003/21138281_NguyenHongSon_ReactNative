function checkDogs(dogsJulia, dogsKate) {
    // 1. Correcting Julia's data by creating a shallow copy and removing the first and last two cats
    const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  
    // 2. Combine both arrays (Julia's corrected data and Kate's data)
    const allDogs = dogsJuliaCorrected.concat(dogsKate);
  
    // 3. Loop through each dog and log whether it's an adult or a puppy
    allDogs.forEach((dogAge, i) => {
      if (dogAge >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old.`);
      } else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    });
  }
  
  // Test data 1
  const juliaData1 = [3, 5, 2, 12, 7];
  const kateData1 = [4, 1, 15, 8, 3];
  checkDogs(juliaData1, kateData1);
  
  // Test data 2
  const juliaData2 = [9, 16, 6, 8, 3];
  const kateData2 = [10, 5, 6, 1, 4];
  checkDogs(juliaData2, kateData2);
  
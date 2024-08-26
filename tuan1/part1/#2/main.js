// main.js
function calculateBMI(mass, height) {
  return mass / (height ** 2);
}

function compareBMI(markMass, markHeight, johnMass, johnHeight) {
  const markBMI = calculateBMI(markMass, markHeight);
  const johnBMI = calculateBMI(johnMass, johnHeight);

  if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
  } else if (markBMI < johnBMI) {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
  } else {
    console.log(`Both Mark and John have the same BMI (${markBMI.toFixed(1)})!`);
  }

  return { markBMI, johnBMI, markHigherBMI: markBMI > johnBMI };
}

module.exports = { calculateBMI, compareBMI };

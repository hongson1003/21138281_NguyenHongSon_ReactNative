// main.js
function calculateBMI(mass, height) {
    return mass / (height ** 2);
  }
  
  function compareBMI(markMass, markHeight, johnMass, johnHeight) {
    const markBMI = calculateBMI(markMass, markHeight);
    const johnBMI = calculateBMI(johnMass, johnHeight);
    const markHigherBMI = markBMI > johnBMI;
    return { markBMI, johnBMI, markHigherBMI };
  }
  
  module.exports = { calculateBMI, compareBMI };
  
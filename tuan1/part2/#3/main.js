// Tạo đối tượng Mark với thuộc tính và phương thức tính BMI
const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI() {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    }
  };
  
  // Tạo đối tượng John với thuộc tính và phương thức tính BMI
  const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI() {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    }
  };
  
  // Tính BMI của Mark và John
  Mark.calcBMI();
  John.calcBMI();
  
  // So sánh BMI và in kết quả ra console
  const compareBMI = () => {
    if (Mark.bmi > John.bmi) {
      console.log(`${Mark.fullName}'s BMI (${Mark.bmi.toFixed(1)}) is higher than ${John.fullName}'s (${John.bmi.toFixed(1)})!`);
    } else if (John.bmi > Mark.bmi) {
      console.log(`${John.fullName}'s BMI (${John.bmi.toFixed(1)}) is higher than ${Mark.fullName}'s (${Mark.bmi.toFixed(1)})!`);
    } else {
      console.log(`Both ${Mark.fullName} and ${John.fullName} have the same BMI (${Mark.bmi.toFixed(1)})!`);
    }
  };
  
  // Gọi hàm so sánh BMI
  compareBMI();
  
  // Export các đối tượng và hàm để kiểm thử
  module.exports = {
    Mark,
    John,
    compareBMI
  };
  
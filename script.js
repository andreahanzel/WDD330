let calculator = {
    a: 0, // First number
    b: 0, // Second number
  
    // Read two numbers from the user
    read() {
      this.a = +prompt("Enter the first value:", 0);
      this.b = +prompt("Enter the second value:", 0);
    },
  
    // Add the two numbers
    sum() {
      return this.a + this.b;
    },
  
    // Multiply the two numbers
    mul() {
      return this.a * this.b;
    },
  
    // Subtract the second number from the first
    sub() {
      return this.a - this.b;
    },
  
    // Divide the first number by the second
    div() {
      if (this.b === 0) {
        return "Error: Division by zero is not allowed!";
      }
      return this.a / this.b;
    },
  };
  
  // Test the calculator
  calculator.read();
  alert("Sum: " + calculator.sum());       // Outputs the sum
  alert("Product: " + calculator.mul());   // Outputs the product
  alert("Difference: " + calculator.sub()); // Outputs the difference
  alert("Quotient: " + calculator.div());   // Outputs the quotient
  
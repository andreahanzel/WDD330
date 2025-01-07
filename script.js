let calculator = {
    a: 0,
    b: 0,

    read() {
        this.a = +prompt("Enter the first value:", 0);
        this.b = +prompt("Enter the second value:", 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert("Sum: " + calculator.sum());
alert("Product: " + calculator.mul());


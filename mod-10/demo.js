class Calculator {
    constructor(element) {
        this.element = element;
    }
    add(x, y) {
        const sum = x + y;
        this.element.textContent = sum.toString();
        return sum;
    }
    subtract(x, y) {
        const diff = x - y;
        this.element.textContent = diff.toString();
        return diff;
    }
}
const calc = new Calculator(document.getElementById('result'));
console.log('1 + 2 =', calc.add(1, 2));
console.log('10 - 5 =', calc.subtract(10, 5));
//# sourceMappingURL=demo.js.map
class Calculator {
    constructor(element) {
        this.element = element;
    }
    add(x, y) {
        const sum = (+x) + (+y);
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
console.log('1 + 2 =', calc.add('1', { x: 2 }));
console.log('10 - 5 =', calc.subtract(10, 5));
var o = {
    firstName: ''
};
o.lastName = '1';
var el = document.getElementById('demo');
let x = 1;
x = 2;
// x = '';
function printPerson(p) {
    console.log(p.firstName);
}
printPerson({
    firstName: '',
});
class APerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
printPerson(new APerson('', ''));
$.ajax({
    url: ''
});
$(() => { });
//# sourceMappingURL=demo.js.map
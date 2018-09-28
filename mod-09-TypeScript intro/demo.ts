type NumberOrString = number | string | {x:number}


class Calculator {

  constructor(private readonly element: HTMLElement) {
  }

  add(x: NumberOrString, y: NumberOrString) {
    const sum = (+x) + (+y);
    this.element.textContent = sum.toString();
    return sum;
  }

  subtract(x: number, y: number) {
    const diff = x - y;
    this.element.textContent = diff.toString();
    return diff;
  }
}

const calc = new Calculator(document.getElementById('result'));
console.log('1 + 2 =', calc.add('1', {x:2}));
console.log('10 - 5 =', calc.subtract(10, 5));


// calc.element = null;


interface Person {
  firstName: string;
  lastName?: string;
}

var o: Person = {
  firstName: ''
};

o.lastName = '1';

var el = document.getElementById('demo') as HTMLInputElement;

let x = 1;
x = 2;
// x = '';



function printPerson(p: {firstName:string}){
  console.log(p.firstName)
}


printPerson({
  firstName: '',
  // lastName: ''
})


class APerson implements Person {
  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  firstName: string;  
  lastName?: string;


}


printPerson(new APerson('', ''))



$.ajax({
  url: ''
})


$(() => {})
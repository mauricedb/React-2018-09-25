// const factory = (mapStateToProps, ....) => (Component) => {}

function log(msg: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = target[key];

    target[key] = function(...args: any[]) {
      console.time(`${msg} => ${key}(${args}).`);
      original.call(this, ...args);
      console.timeEnd(`${msg} => ${key}(${args}).`);
    };
    return target;
  };
}

class Calculator {
  constructor(private readonly element: HTMLElement) {}

  @log('hello ')
  add(x: number, y: number) {
    const sum = x + y;
    if (this.element) {
      this.element.textContent = sum.toString();
    }
    return sum;
  }

  subtract(x: number, y: number) {
    const diff = x - y;
    if (this.element) {
      this.element.textContent = diff.toString();
    }
    return diff;
  }
}

const el = document.getElementById('result');
if (el) {
  const calc = new Calculator(el);
  console.log('1 + 2 =', calc.add(1, 2));
  console.log('10 - 5 =', calc.subtract(10, 5));
}

class Animal {
  // eat() {}
}

class Cat extends Animal {
  type: 'cat' = 'cat';
  sleep() {}
}

class Dog extends Animal {
  type: 'dog' = 'dog';
  guard() {}
}

function doYourStuff(animal: Dog | Cat) {
  if (animal instanceof Cat) {
    animal.sleep();
  } else if (animal instanceof Dog) {
    animal.guard();
  }

  if (animal.type === 'dog') {
    animal.guard();
  }
}

doYourStuff(new Cat());

doYourStuff(new Dog());

// doYourStuff({type:'cat'});

let x: boolean | 'yes' | 'no' | 1 | 42;

x = 42;
x = true;

x = 'no';

fetch('movies.json')
  .then(rsp => (rsp.ok ? Promise.resolve(rsp) : Promise.reject(rsp)))
  .then(rsp => rsp.json())
  .then(data => console.table(data))
  .catch(err => console.log(err));

async function getMovies() {
  try {
    const rsp = await fetch('movies.json');
    if (rsp.ok) {
      const data = await rsp.json();
      console.table(data);
      return data;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}

getMovies().then(console.log);

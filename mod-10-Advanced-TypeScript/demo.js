"use strict";
// const factory = (mapStateToProps, ....) => (Component) => {}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function log(msg) {
    return function (target, key, descriptor) {
        const original = target[key];
        target[key] = function (...args) {
            console.time(`${msg} => ${key}(${args}).`);
            original.call(this, ...args);
            console.timeEnd(`${msg} => ${key}(${args}).`);
        };
        return target;
    };
}
class Calculator {
    constructor(element) {
        this.element = element;
    }
    add(x, y) {
        const sum = x + y;
        if (this.element) {
            this.element.textContent = sum.toString();
        }
        return sum;
    }
    subtract(x, y) {
        const diff = x - y;
        if (this.element) {
            this.element.textContent = diff.toString();
        }
        return diff;
    }
}
__decorate([
    log('hello ')
], Calculator.prototype, "add", null);
const el = document.getElementById('result');
if (el) {
    const calc = new Calculator(el);
    console.log('1 + 2 =', calc.add(1, 2));
    console.log('10 - 5 =', calc.subtract(10, 5));
}
class Animal {
}
class Cat extends Animal {
    constructor() {
        super(...arguments);
        this.type = 'cat';
    }
    sleep() { }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.type = 'dog';
    }
    guard() { }
}
function doYourStuff(animal) {
    if (animal instanceof Cat) {
        animal.sleep();
    }
    else if (animal instanceof Dog) {
        animal.guard();
    }
    if (animal.type === 'dog') {
        animal.guard();
    }
}
doYourStuff(new Cat());
doYourStuff(new Dog());
// doYourStuff({type:'cat'});
let x;
x = 42;
x = true;
x = 'no';
fetch('movies.json')
    .then(rsp => (rsp.ok ? Promise.resolve(rsp) : Promise.reject(rsp)))
    .then(rsp => rsp.json())
    .then(data => console.table(data))
    .catch(err => console.log(err));
function getMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rsp = yield fetch('movies.json');
            if (rsp.ok) {
                const data = yield rsp.json();
                console.table(data);
                return data;
            }
        }
        catch (error) {
            console.error(error);
        }
        return [];
    });
}
getMovies().then(console.log);
//# sourceMappingURL=demo.js.map
import { Component } from 'react';

export default class Person extends Component {
  constructor(firstName) {
    super();
    this.firstName = firstName;
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }
}

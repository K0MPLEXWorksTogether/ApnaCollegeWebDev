class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  talk() {
    console.log(`My name is ${this.name}.`)
  }
}

module.exports = {
  Person,
}

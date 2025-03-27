const { Person } = require('./index')

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age)
    this.marks = marks
  }

  greet() {
    return 'Hello!'
  }
    
    talk() {
        console.log(`Hi. My name is ${this.name}, I am ${this.age} years old, and I have ${this.marks} marks.`)
    }
}

let s1 = new Student("Abhiram", 20, 8.53)
s1.talk()

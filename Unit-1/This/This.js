class Person {
  constructor(name) {
    this.name = name;
  }

  intro() {
    return `Hello, I'm ${this.name}!`;
  }
}

const katie = new Person('Katie');
katie.intro(); //-> Hello, I'm Katie!
console.log(katie.intro());

const checkThisInArrowFunction = {
  message: 'SEI Rocks!',
  thisCheck: function() {
    setTimeout(() => console.log(this.message));
  }
};

checkThisInArrowFunction.thisCheck();  //-> SEI Rocks!



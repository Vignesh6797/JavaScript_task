// class Car {
//   name = 'Glanza';

//   getName() {
//     return this.name;
//   }

//   constructor() {
//     console.log(this.getName());
//     console.log(this)
//   }
// }

// const obj = new Car();

function Car() {
  this.car = 'Glanza';
  this.getName = () => {
    return this.car;
  };
  this.getName();
}

new Car();

//this is instance of object.

// instance some memory create when create object for class or using this keyword referenced time.

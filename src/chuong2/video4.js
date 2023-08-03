//es6
function handle(cb) {
  return cb();
}
class Cat {
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
    this.meow = this.meow.bind(this);
  }
  meow() {
    console.log(this.name);
  }
  run() {
    handle(this.meow);
  }
}
function Dog(name, color, type) {
  this.name = name;
  this.color = color;
  this.type = type;

  this.dog = () => {
    console.log(this.name);
  };
}
export default function Video4() {
  let test1 = new Cat("Hello", "red", "1");
  let test2 = new Dog("hi", "1", "1");
  test1.run();
  test2.dog();
  return <>4</>;
}

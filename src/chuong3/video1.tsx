const sub: (num1: number, num2: number) => number = (
  num1: number,
  num2: number
) => num1 - num2;

const handle = (): void => {
  console.log(123);
};

// Union
let price: string | number | boolean;
price = "10";
price = 20;

//enum
enum Sizes {
  S = "S",
  M = "M",
  L = "L",
}

let size = Sizes.L;

//interface
interface State {
  name: string;
  isLoading: boolean;
}

let state: State = {
  name: "name",
  isLoading: true,
};

//type

type Name = {
  name: string;
  isLoading: boolean;
};

let person: State = {
  name: "name",
  isLoading: true,
};

//class
class Person {
  private name: string;
  age: number;
  readonly money: number = 40;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  handle() {
    this.name;
  }
}

const human = new Person("name", 20);
human.age;

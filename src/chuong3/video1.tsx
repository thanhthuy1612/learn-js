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

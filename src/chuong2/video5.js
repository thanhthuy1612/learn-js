export default function Video5() {
  // callback function
  const nums = [1, 2, 3, 4, 5, 6];
  const callback = (item, index) => {
    console.log(`${index} ${item}`);
  };
  nums.forEach(callback);
  //currying là function mà return về function
  const findnumber = (num) => (func) => {
    const result = [];
    for (let i = 0; i < num; i++) {
      if (func(i)) {
        result.push(i);
      }
    }
    return result;
  };

  const totalNumber = (num) => (func) => {
    let total = 0;
    for (let i = 0; i < num; i++) {
      if (func(i)) {
        total += i;
      }
    }
    return total;
  };

  const value1 = findnumber(10)((number) => number % 2 === 0);
  const value2 = totalNumber(10)((number) => number);
  console.log(value1, value2);
  return <>5</>;
}

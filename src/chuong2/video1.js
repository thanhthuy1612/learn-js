export default function Video1() {
  //Destructuring
  //Object
  const user = {
    name: "name",
    age: 23,
    ability: ["hello"],
  };
  const { name: ten, age } = user;
  console.log(ten, age);
  //Array
  const list = [
    1,
    function (a, b) {
      return a + b;
    },
  ];
  const [value, sum] = list;
  console.log(value, sum(1, 2));
  //Spread Syntax
  //shallow copy
  const cloneUser = { ...user };
  console.log(cloneUser === user, cloneUser.ability === user.ability);
  //Rest parameter
  const handle = (a, b, ...c) => {
    return c;
  };
  const array = handle(1, 2, 3, 4, 5, 6, 7);
  console.log(array);

  const handleObject = ({ a, b, ...c }) => {
    return c;
  };
  const object = handleObject({ a: 1, b: 2, c: 3, d: 4 });
  console.log(object);
  return <>1</>;
}

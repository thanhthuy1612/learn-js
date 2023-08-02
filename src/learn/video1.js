export default function Video1() {
  //Destructuring
  //Object
  const user = {
    name: "name",
    age: 23,
  };
  //Array
  const { name: ten, age } = user;
  console.log(ten, age);
  return <>123</>;
}

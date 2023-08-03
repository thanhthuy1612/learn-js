export default function Video3() {
  // boolean {true: {}, [], " ";false: undefined, null, "", NaN, 0, 0N}
  // &&
  let check = 10;
  const handle = () => {
    return [1, 2, 3].map((item) => item * 2);
  };
  console.log(check && handle());
  //optional chaning ?. : user?.address?.text
  //nullist ??
  return <>3</>;
}

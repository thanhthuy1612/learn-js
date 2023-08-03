export default function Video2() {
  // tham trị: number string boolean null undefined BigInt Symbol (việc copy độc lập)
  // tham chiếu: object array, function (Một biến object không lưu giắ trị, nó lưu trữ "địa chỉ bộ nhớ"-hay còn gọi nó là tham chiếu đến ô nhớ)\
  // khi copy một biến object, tham chiếu của nó sẽ bị copy object không bị nhân đôi lên
  let user = { name: "Latiah", age: 23 };
  let admin = user;
  admin.name = "Thanh Thuy";
  console.log(admin, user);
  let a = {};
  let b = a;
  console.log(b === a); //true

  let c = { a: 1 };
  let d = { a: 1 };
  console.log(c === d); //false

  //deep clone
  let clone = { ...user };
  clone.name = "Latiah";
  console.log(user, admin, clone);
  JSON.parse(JSON.stringify(clone.name));
  return <>2</>;
}

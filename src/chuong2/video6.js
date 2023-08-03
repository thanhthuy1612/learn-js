export default function Video6() {
  // bất đồng bộ
  // setTimeout(() => {
  //   console.log("Hello");
  // }, 1000);
  // console.log("Hi");
  // bất đồng bộ
  console.log(2);
  const pFunc = () =>
    new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve("Hello");
        }, 1000);
      } catch (err) {
        reject(err);
      }
    });

  const value = pFunc()
    .then((value) => {
      console.log(value);
      return 100;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("finally");
    });
  console.log(1);
  value.then((value) => {
    console.log(value);
  });

  // async/await : await chỉ sử dụng được trông một async function, chỉ sử dụng await với promise

  const p2 = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hi");
      }, 1000);
    });
  // const handle = async () => {
  //   try {
  //     let value = await p2();
  //     console.log(value);
  //   } catch (err) {
  //     console.log(value);
  //   } finally {
  //     console.log("Finally p2");
  //   }
  // };

  // handle();

  ;(async () => {
    try {
      let value = await p2();
      console.log(value);
    } catch (err) {
      console.log(value);
    } finally {
      console.log("Finally p2");
    }
  })();

  return <>6</>;
}

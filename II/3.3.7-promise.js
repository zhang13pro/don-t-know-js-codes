let p = {
  then(cb, errcb) {
    cb(42);
    errcb("err msg");
  },
};

p.then(
  function fulfilled(value) {
    console.log(value);
  },
  function rejected(err) {
    // 这里真的需要被执行吗？
    console.log(err);
  }
);
/**
 * Promise.resolve(..)可以接受任何thenable，将其解封为它的非thenable值。
 */
Promise.resolve(p).then(
  function fulfilled(value) {
    console.log(value);
  },
  function rejected(err) {
    console.log("不会被执行");
  }
);

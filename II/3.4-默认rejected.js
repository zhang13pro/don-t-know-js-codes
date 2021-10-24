let p = new Promise((resolve, reject) => {
  reject("Oops");
});

p.then(function fulfilled() {
  console.log("Here will not be running");
}).then(
  function fulfilled() {
    console.log("Here will not be running");
  },
  function rejected(err) {
    console.log("error会被传递知道显示定义rejected函数 " + err);
  }
);

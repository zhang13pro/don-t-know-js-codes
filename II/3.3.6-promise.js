// 分别注释 foo.bar()
var p = new Promise((resolve, reject) => {
  foo.bar();
  resolve(43);
});

p.then(
  function fulfilled(msg) {
    // foo.bar();
    console.log("success " + msg);
  },
  function rejected(err) {
    console.log("rejected " + err);
  }
);

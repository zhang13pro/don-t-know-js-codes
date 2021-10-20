let p = new Promise((resolve, reject) => {
  resolve("success");
});
p.then(function () {
  p.then(function () {
    console.log("C");
  });
  console.log("A");
});
p.then(function () {
  console.log("B");
});

// A B C

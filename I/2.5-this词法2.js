let b = 4;
function foo() {
  debugger;
  setTimeout(function () {
    console.log(this.a);
  }, 100);
  console.log(this.b);
}

let obj = {
  a: 2,
};

foo();
// foo.call(obj);

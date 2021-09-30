function foo() {
  var a = 2;
  // 最自然的调用是利用词法作用域
  // 也就是 bar()
  this.bar();
}

function bar() {
  console.log(this.a);
}

foo(); // this.bar is not a function

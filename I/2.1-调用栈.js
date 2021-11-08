function foo() {
  console.log("baz");
  bar();
}

function bar() {
  console.log("bar");
  baz();
}

function baz() {
  debugger;
  console.log("baz");
}

foo();

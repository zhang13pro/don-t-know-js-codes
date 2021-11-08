function foo() {
  return (a) => {
    console.log(this.a);
  };
}

let obj1 = {
  a: 2,
};

let obj2 = {
  a: 3,
};

let bar = foo.call(obj1);
console.log(bar);
bar();
bar.call(obj2); // 箭头函数的绑定无法被修改，我的理解是硬绑定无法再修改this

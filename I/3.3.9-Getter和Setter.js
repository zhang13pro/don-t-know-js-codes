// TODO
let myObject = {
  get a() {
    return this.a;
  },

  set a(value) {
    debugger;
    this.a = value; // 这里会一直调用setter 栈溢出
  },
};

// Object.defineProperty(myObject, "b", {
//   get() {
//     return this.a * 2;
//   },
//   enumerable: true,
// });

// console.log(myObject.a);
// console.log(myObject.b);

myObject.a = 3;
myObject.a; // RangeError: Maximum call stack size exceeded 为什么呀

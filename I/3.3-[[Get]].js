let myObject = {
  a: 2,
};

console.log(myObject.a); // 2
/**
 * [[Get]]操作会查找原型链
 * 对象和原型链都找不到变量 b
 */
console.log(myObject.b); // undefined
/**
 * RHS
 * 值得注意的是当引用了一个当前词法作用域不存在的变量，并不会像对象属性一样返回undefined
 */
console.log(c); // ReferenceError: c is not defined

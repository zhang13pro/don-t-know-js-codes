function doSomething(a) {
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}

function doSomethingElse(a) {
  return a - 1;
}
/**
 * 在非“严格模式”中 值得一提的是
 * 如果不声明全局变量 b
 * 全局作用域就会创建一个具有该名称的变量（b），并将其返还给引擎
 * 这是因为引擎在查找 doSomething 函数中的变量 b 时，使用的是LHS查询
 */
var b; // 注释这行依然得到正确结果
doSomething(2);

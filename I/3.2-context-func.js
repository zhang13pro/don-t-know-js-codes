function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }

  var b;
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}
/**
 * 同样得到正确结果
 * 却隐藏了内部变量和方法 设计更加合理
 */
doSomething(2);

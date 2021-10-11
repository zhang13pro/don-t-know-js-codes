/**
 * 这里使用了 let 关键字
 * 1：创建了块级作用域
 * 2：每次迭代都会声明变量，使用上一次迭代后的值初始化这个变量 （是的，这就是闭包）
 * 块作用域+闭包 我是一名快乐的 JavaScript 程序员
 */

for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

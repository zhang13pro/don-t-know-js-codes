for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`全局作用域${i}`);

// 好啦 我知道你已经跃跃欲试的想使用 let 了
for (var i = 0; i < 3; i++) {
  setTimeout(function setTimeoutHandle() {
    console.log(i);
  }, 1000);
}

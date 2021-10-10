function foo() {
  console.log(this.bar);
}
var bar = "global";

// 这才对嘛 书中（下卷P45）输出“global”是什么鬼
foo(); // undefined
new foo(); // undefined

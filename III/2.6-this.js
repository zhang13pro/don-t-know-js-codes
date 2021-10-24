function foo() {
  "use strict";
  console.log(this.bar);
}
let bar = "global";

/**
 * 变量提升
 * TDZ
 * RHS
 * 严格模式
 */
foo(); // undefined || global || TypeError
new foo(); // undefined

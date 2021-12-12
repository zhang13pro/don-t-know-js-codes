const PRICE = 90;
const TAX_RATE = 0.08;
// 心理预期
const THRESHOLD = 200;
const PERIPHERAL = 9.98;

let bank_balance = prompt("请输入账户余额");
let sum = 0;

function calculateTax(sum) {
  return sum * TAX_RATE;
}

function calculateFinalAmount(sum) {
  return (sum += calculateTax(sum));
}

while (sum < bank_balance) {
  sum += PRICE;

  if (sum < THRESHOLD) {
    sum += PERIPHERAL;
  }
}

let sumPrice = calculateFinalAmount(sum);
if (sumPrice > bank_balance) {
  console.log("余额不足，购买失败");
}

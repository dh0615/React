let oddSum = 0;

for (let i = 1; i <= 100; i += 2) {
  // 홀수니까 2씩 증가해야하므로 i += 2 써줌
  oddSum += i;
}
console.log(oddSum);

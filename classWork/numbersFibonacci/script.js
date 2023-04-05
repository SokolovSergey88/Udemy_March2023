function numbersFibonacci(num) {  // num = 3
  if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
    return "";
  }

  let result = '';
  let first = 0;    
  let second = 1;
           //0 //1 //2
  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += `${first}`;
    } else {
      result += `${first} `;          // 0 1 1 
    }

    let third = first + second; // 1  2
    first = second; // 1  1
    second = third; // 1  2
  }

  return result;
}
console.log(numbersFibonacci(3));
console.log(numbersFibonacci(10));
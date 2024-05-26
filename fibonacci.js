let end = 20;

function fibonacci(number) {
  let first = 0;
  let second = 1;
  let sequence = [];
  sequence.push(first);
  for (let i = 0; i < number; i++) {
    let result = first + second;
    first = second;
    second = result;
    sequence.push(result);
  }
  console.log(sequence);
}

let start = 0;
let first = 0;
let second = 1;
let sequence = [0];
function recursiveFibonacci(number, first, second, sequence) {
  if (start >= number) {
    return sequence;
  }
  let result = first + second;
  first = second;
  second = result;
  sequence.push(result);
  start++;
  return recursiveFibonacci(number, first, second, sequence);
}
console.log(recursiveFibonacci(10, first, second, sequence));

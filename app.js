'use strict';
const num = process.argv[2] || 0;
let counter = 0;

function fib(n){
  counter++;
  if(n === 0){
    return 0;
  } else if(n === 1){
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

for(let i = 0 ; i <= num ; i++){
  console.log(`${i}番目のフィボナッチ数は${fib(i)}です。${counter}回計算をしました。`)
}
'use strict';
const num = process.argv[2] || 0;
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

let counter = 0;

function fib(n){
  counter++;

  if(memo.has(n) === false){
    // 未計算のため、計算してmemoにセットする
    memo.set(n, memo.get(n-1) + memo.get(n-2));
  }
  return memo.get(n);
}

for(let i = 0 ; i <= num ; i++){
  console.log(`${i}番目のフィボナッチ数は${fib(i)}です。${counter}回計算をしました。`)
}
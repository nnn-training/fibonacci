'use strict';

// function fib(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 1);

function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    // 一度計算した結果を保存・・・「メモ化」
    return value;
}

function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    // console.log(fib(i));
    console.log(trib(i));
}
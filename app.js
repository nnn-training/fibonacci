'use strict';
// 再帰関数を計算して値を求め
// それを Map に格納した後、返すという実装
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib(n){
    if (memo.has(n) === true) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
/*
    このやり方だと、加算回数が増加していくアルゴリズム
    function fib(n){
    if (n === 0) {
        return 0;
    }else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2)
*/
const length = 100;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}
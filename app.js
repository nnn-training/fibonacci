'use strict';

// トリボナッチ用のmap
const tribMap = new Map();
tribMap.set(0, 0);
tribMap.set(1, 0);
tribMap.set(2, 1);

// 連想配列を用いたフィボナッチ関数の実装
const memo = new Map(); // 一度計算した数を記録しておくための連想配列
// 0番目と1番目の答えはあらかじめ定義されている。
memo.set(0, 0);
memo.set(1, 1);

function mapFib(n) {
    // この実装では、線形オーダー(O(n))らしい。かるい
    if (memo.has(n)){
        // すでに計算したことがある数が与えられた場合、mapから参照して取り出す。
        // この部分がfib()の再起で、ここでもO(2^n)の処理が走っていたんだけど、それが参照に変わったので、計算が早いはず。
        return memo.get(n);
    }
    const value = mapFib(n - 1) + mapFib(n - 2);
    memo.set(n, value); // これ、参照して存在したときに、連想配列へのset不要じゃない？気のせい？
    return value;
}

function mapTrib(n) {
    // フィボナッチの線形オーダー実装同様に、一度計算したトリボナッチの加算は行わないよう、mapに格納していく。
    if (tribMap.has(n)){
        return tribMap.get(n);
    }
    const value = mapTrib(n - 1) + mapTrib(n-2) + mapTrib(n-3);
    tribMap.set(n, value);
    return value;
}

// 指数オーダーのフィボナッチ関数の実装
/**
 * 
 * @param {Number} n 
 * @returns {null}
 */

// function fib(n){
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }

//     return fib(n-1) + fib(n-2);
// }

const length  = 40;
for (let i = 0; i <= length; i++){
    // console.log(mapFib(i));
    console.log(i + ':', mapTrib(i));
}


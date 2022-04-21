'use strict';
const memo = new Map();
//memo.setで条件を先に設定。
memo.set(0, 0);
memo.set(1, 1);
//memo.hasで持っているか確認。持っていたらreturnへ
function fib(n) {
  if (memo.has(n) === true) {
    return memo.get(n);
  }
//値がなかったので計算、memo.setで計算した値をMapに登録後出た答えを返す。
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}

/*
/ const memo = new Map();
これでMapのオブジェクトができる。
 new Map();をここではmemoという変数に代入して、
 データの追加：
 変数名.set(第一引数にキー(数でも文字でも),第二引数には値);で,
定義できる。（記憶させる）
データの参照：
変数名.get();でできる。

/　if (memo.has(n) === true) {}
hasで、すでにmemoに値が登録されているか確認できる。
trueかfalseを返してくれる。
ここではもしmemoが持っていたらtrueなので、
データの参照＝return memo.get(n)への処理へはいる。


*/
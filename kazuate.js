// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let owari = false;
// そのほか，必要に応じて変数を宣言してもよい
let btn = document.querySelector('button#btn');

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu++
  document.querySelector('span#kaisu').textContent = kaisu;
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
    yoso = Number(document.querySelector('input[name="kazu"]').value);
  let number = document.querySelector('span#answer');
  number.textContent = yoso;
  let show = document.querySelector('p#result');
  if (kaisu > 3 || owari) {
    show.textContent = '答えは' + kotae + 'でした。ゲームはすでに終わっています。';
  }else if (yoso === kotae) {
    show.textContent = '正解です。おめでとう！'
    owari = true;
  } else if (kaisu === 3) {
    show.textContent = 'まちがい。残念でした。答えは ' + kotae + ' です。';
  } else if (kaisu >= 3) {
    show.textContent = '答えは' + kotae + 'でした。ゲームはすでに終わっています。';
  } else if (yoso > kotae) {
    show.textContent = 'まちがい。答えはもっと小さいですよ。'
  }
  else {
    show.textContent = 'まちがい。答えはもっと大きいですよ。'
  }

  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
btn.addEventListener('click', hantei);

// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録

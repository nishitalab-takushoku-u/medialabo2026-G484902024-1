
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let results = data.results.shop;
    console.log(results.length+"件の検索結果が見つかりました。");
    for(let s of results){
      // console.log(s.length+"件の検索結果が見つかりました。");
      console.log("店名:",s.name);
      console.log("住所:",s.address);
      console.log("予算:",s.budget.name );
      console.log("ジャンル:",s.genre.name);
      console.log("営業時間:",s.open);
      console.log("最寄駅:",s.station_name);
      console.log("アクセス:",s.access);
      console.log("キャッチコピー:",s.catch);
      console.log("サブジャンル:",s.sub_genre.name );
    }

  
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let results = data.results.shop;
  let result = document.querySelector('#result');
  result.textContent = '';
  let count = document.createElement('p');
  count.textContent = results.length + '件の検索結果が見つかりました。';
  result.insertAdjacentElement('beforeend', count);
  let number = 1;
  for (let shop of results) {
    let h2 = document.createElement('h2');
    h2.textContent = '検索結果' + number + '件目';
    result.insertAdjacentElement('beforeend', h2);
    let name = document.createElement('h3');
    name.textContent = shop.name;
    result.insertAdjacentElement('beforeend', name);
    let zentai = document.createElement('div');
    zentai.classList.add('zentai');
    result.insertAdjacentElement('beforeend', zentai);
    let div = document.createElement('div');
    zentai.insertAdjacentElement('beforeend', div);
    let addresst = document.createElement('h3');
    addresst.textContent = '住所';
    div.insertAdjacentElement('beforeend', addresst);
    let address = document.createElement('p');
    address.textContent = shop.address;
    div.insertAdjacentElement('beforeend', address);
    let budgett = document.createElement('h3');
    budgett.textContent = '予算';
    div.insertAdjacentElement('beforeend', budgett);
    let budget = document.createElement('p');
    budget.textContent = shop.budget.name;
    div.insertAdjacentElement('beforeend', budget);
    let genret = document.createElement('h3');
    genret.textContent = 'ジャンル';
    div.insertAdjacentElement('beforeend', genret);
    let genre = document.createElement('p');
    genre.textContent = shop.genre.name;
    div.insertAdjacentElement('beforeend', genre);
    let opent = document.createElement('h3');
    opent.textContent = '営業時間';
    div.insertAdjacentElement('beforeend', opent);
    let open = document.createElement('p');
    open.textContent = shop.open;
    div.insertAdjacentElement('beforeend', open);
    let stationt = document.createElement('h3');
    stationt.textContent = '最寄駅';
    div.insertAdjacentElement('beforeend', stationt);
    let station = document.createElement('p');
    station.textContent = shop.station_name;
    div.insertAdjacentElement('beforeend', station);
    let access = document.createElement('p');
    access.textContent = 'アクセス：' + shop.access;
    div.insertAdjacentElement('beforeend', access);
    let othert = document.createElement('h3');
    othert.textContent = 'その他';
    div.insertAdjacentElement('beforeend', othert);
    let catchCopy = document.createElement('p');
    catchCopy.textContent = 'キャッチコピー：' + shop.catch;
    div.insertAdjacentElement('beforeend', catchCopy);
    let subGenre = document.createElement('p');

    if (shop.sub_genre && shop.sub_genre.name) {
      subGenre.textContent = 'サブジャンル：' + shop.sub_genre.name;
    } else {
      subGenre.textContent = 'サブジャンル：なし';
    }

    div.insertAdjacentElement('beforeend', subGenre);

    number++;
    }
  }

// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('button#btn');
b.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let genre = document.querySelector('#gurume').value;;

  if (genre === '') {
    document.querySelector('#result').textContent = '';
    return;
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json'
;

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    printDom(data);
    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

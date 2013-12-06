$(function(){

    // 本情報コレクションクラスを生成
    // 生成処理中にデータ取得処理が非同期実行される
    var listData = new BookCollection();

    // リスト表示部のエレメントを取得
    var $listEl = $('#book-list');
    
    // リストビュークラスを生成
    // 描画対象のエレメントと、本情報コレクションオブジェクトをoptionで渡す
    var listView = new BookListView({el:$listEl, collection:listData});

});
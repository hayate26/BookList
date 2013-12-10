$(function(){

    // 本情報コレクションクラスを生成
    var listData = new BookCollection();

    // リスト表示部のエレメントを取得
    var $listEl = $('#book-list');
    
    // リストビュークラスを生成
    // 描画対象のエレメントと、本情報コレクションオブジェクトをoptionで渡す
    var listView = new BookListView({el:$listEl, collection:listData});


    // 本情報(JSON)を取得
    listData.fetch({reset:true});

});
/**
 * 本リストを表示するViewクラス
 * 複数のBookItemViewを管理する
 * @class BookListView
 * @extends Marionette.CollectionView
 * @constructor
 */
 var BookListView = Marionette.CollectionView.extend({

    itemView: BookItemView

 });
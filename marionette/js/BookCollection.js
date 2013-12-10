/**
 * 本のリストを管理するCollectionクラス
 * @class BookCollection
 * @extends Backbone.Collection
 * @constructor
 */
var BookCollection = Backbone.Collection.extend({

    model: BookModel,

    url: "js/bookdata.json",

    /**
     * 全モデルのunreadフラグをfalseに更新します。
     * @method readAll
     */
    readAll: function() {
        this.each(function(item) {
            item.set('unread', false);
        }, this);
    },

    /**
     * 全モデルのunreadフラグをtrueに更新します。
     * @method unreadAll
     */
    unreadAll: function() {
       this.each(function(item) {
           item.set('unread', true);
       }, this);
    }
});
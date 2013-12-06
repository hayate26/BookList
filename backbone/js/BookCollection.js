/**
 * 本のリストを管理するCollectionクラス
 * @class BookCollection
 * @extends Backbone.Collection
 * @constructor
 */
var BookCollection = Backbone.Collection.extend({

    model: BookModel,

    url: "js/bookdata.json",

    initialize: function() {
        this.fetch({reset:true});
    }
});
/**
 * 本リストを表示するViewクラス
 * 複数のBookItemViewを管理する
 * @class BookListView
 * @extends Backbone.View
 * @constructor
 */
 var BookListView = Backbone.View.extend({

    initialize: function(options) {
        this.collection = options.collection;

        this.listenTo(this.collection, 'reset', this.render);
    },

    render: function() {
        this.collection.each(function(item) {
            var itemView = new BookItemView({model:item});
            this.$el.append(itemView.$el);
        }, this);
    }

 });
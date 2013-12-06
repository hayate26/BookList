/**
 * 本１冊分の情報を表示するViewクラス
 * リストの中の１行
 * @class BookItemView
 * @extends Backbone.View
 * @constructor
 */
var BookItemView = Backbone.View.extend({
    
    tagName: "li",

    className: "list-item",

    initialize: function() {
        this.template = _.template($('#book-item-template').html());
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});
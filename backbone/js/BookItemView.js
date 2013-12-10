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

        // modelのunreadが変わった時のイベントを監視し、renderを実行
        this.listenTo(this.model, 'change', this.render);

        // 初期描画
        this.render();
    },

    events: {
        'click' : 'onClickView'
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    /**
     * Viewがクリックされた時に実行する処理
     * @method onClickView
     * @param {Object} イベントを発火したオブジェクト
     */
    onClickView: function(event) {
        this.model.toggleUnread();
    },

});
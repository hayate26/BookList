/**
 * 本１冊分の情報を表示するViewクラス
 * リストの中の１行
 * @class BookItemView
 * @extends Marionette.ItemView
 * @constructor
 */
var BookItemView = Marionette.ItemView.extend({
    
    template: "#book-item-template",

    tagName: "li",

    className: "list-item",

    modelEvents: {
        'change': 'render'
    },

    events: {
        'click': 'onClickView'
    },

    onRender: function() {
        console.log(this.model.isUnread());
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
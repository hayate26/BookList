/**
 * 本情報リストのフッター表示を管理するViewクラス
 * @class FooterView
 * @extends Backbone.View
 * @constructor
 */
var FooterView = Backbone.View.extend({

    events: {
        'click #check-all' : 'onClickCheckAll',
        'click #uncheck-all' : 'onClickUncheckAll'
    },

    /**
     * すべて既読ボタンクリック時処理
     * 本情報コレクション内のすべてのモデルを既読にします。
     * @method onClickCheckAll
     */
    onClickCheckAll: function() {
        if (this.collection) {
            this.collection.readAll();
        }
    },

    /**
     * すべて未読ボタンクリック時処理
     * 本情報コレクション内のすべてのモデルを未読にします。
     * @method onClickUncheckAll
     */
    onClickUncheckAll: function() {
        if (this.collection) {
            this.collection.unreadAll();
        }
    }
});
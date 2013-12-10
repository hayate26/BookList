/**
 * 本情報を管理するModelクラス
 * @class BookModel
 * @extends Backbone.Model
 * @constructor
 */
var BookModel = Backbone.Model.extend({

    defaults: {
        title: "",
        unread: true
    },

    /**
     * 未読であればtrueを返します。
     * @method isUnread
     * @return {boolean} 未読であればture, 既読であればfalse
     */
    isUnread : function() {
        return this.get('unread');
    },

    /**
     * unreadの値を反転させます。
     * @method toggleUnread
     */
    toggleUnread: function() {
        this.set('unread', !this.get('unread'));
    }


});
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

});
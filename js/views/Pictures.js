/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 02.03.12
 * Time: 14:19
 * aco.mitevski@mayflower.de
 */
define(['backbone', 'underscore', 'jquery', 'views/Picture', 'collections/Pictures'],
function(Backbone, _, $, pictureView, pictures) {
    var PictureListView = Backbone.View.extend({

        el: $('#results'),
        collection: pictures,

        initialize: function() {
            _.bindAll(this, 'unrender', 'render', 'appendPicture');
            this.items_element = $('#revisions');
            pictures.bind('refresh', this.render);
            pictures.bind('add', this.render);
            pictures.bind('reset', this.render);
        },

        /**
         * unrender all content
         */
        unrender: function() {
            this.items_element.html("");
            this.el.addClass('hidden');
        },

        /**
         * append one revision
         * @param object revision
         */
        appendPicture: function(picture) {
            var view = new pictureView({model: picture});
            var el = view.render().el;
            this.items_element.append(el);
        },

        render: function () {
            this.unrender();
            this.el.removeClass('hidden');
            pictures.each(this.appendPicture);
        }

    });

    return new PictureListView;
});
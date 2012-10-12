/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 12:18
 * aco.mitevski@mayflower.de
 */

define(['backbone', 'underscore', 'models/Picture'],
function(Backbone, _, pictureModel) {
    var Pictures = Backbone.Collection.extend({
        model: pictureModel,
        uuid: null,

        url:function() {
            return 'http://strelka.fs.mayflower.de:8080/lsh/images/similarImages/' + this.getCurrentUuidId();
        },

        /**
         * @return int current uuid
         */
        getCurrentUuidId: function() {
            return this.uuid;
        },

        /**
         *
         * @param int new uuid
         * @return object this
         */
         setCurrentUuidId: function(id) {
            this.uuid = id;
            return this;
        },


        parse: function(response) {
            return response.similarImages;
        }

    });

    return new Pictures;
});
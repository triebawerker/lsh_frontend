/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 14:03
 * aco.mitevski@mayflower.de
 */

define(['backbone',
        'underscore',
        'jquery',
        'collections/Pictures',
        'models/Picture',
        'views/Pictures'],
function(Backbone,
         _,
         $,
         pictures,
         pictureModel,
         pictureListView
        )
{
    var AppRouter = Backbone.Router.extend({

        routes: {
           ''                          : 'home',
           'pictures/:uuid'            : 'loadPictures'
        },

        initialize: function() {
            $("#pictureUrl").on('submit', function(args) {
                var url = $(this[0]).val();
                $.post("http://strelka.fs.mayflower.de:8080/lsh/images/uploadedImages",
                    url, function(result) {
                        location.hash ="pictures/" + result;
                });
            } );
        },

        /**
         * route for default URL
         */
        home: function() {
        },

        loadPictures: function(uuid) {
            pictures.setCurrentUuidId(uuid);
            pictures.fetch();
        }

    });
    return AppRouter;
});
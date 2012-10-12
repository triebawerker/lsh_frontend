
require.config({
  paths: {
    jquery    : 'lib/jquery/jquery-min',
    underscore: 'lib/underscore/underscore-min',
    backbone  : 'lib/backbone/backbone-optamd3-min',
    text      : 'lib/require/text'
  },
  priority: ['jquery']

});

require(['backbone', 'router',
         'lib/bootstrap/bootstrap-dropdown',
         'lib/bootstrap/bootstrap-collapse'],
function(Backbone, router, bootstrapDropdown, bootstrapCollapse){
    var AppRouter = new router;
    Backbone.history.start();
});

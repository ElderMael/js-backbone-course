require.config({
  paths: {
    'jquery': 'vendors/jquery/dist/jquery',
    'handlebars': 'vendors/handlebars/handlebars.amd',
    'underscore': 'vendors/underscore/underscore',
    'backbone': 'vendors/backbone/backbone',
    'backbone-localstorage': 'vendors/backbone-localstorage/backbone-localstorage',
    'bootstrap': 'vendors/bootstrap/dist/js/bootstrap',
    'text': 'vendors/requirejs-text/text'
  },
  shim: {
    'backbone': {
      'deps' : ['underscore', 'jquery']
    },
    'handlebars': {
      'deps': ['jquery', 'text']
    },
    'backbone-localstorage': {
      'deps': ['backbone']
    },
    'bootstrap': {
      'deps': ['jquery']
    }
  },
  waitSeconds: 20
});

(function(root){

  if(!root.App) {
    root.App = {};
  }

  require(['jquery', 'backbone', 'handlebars', 'bootstrap', 'router/router', 'views/index', 'model/index'], function(jQuery, Backbone, Handlebars, Bootstrap, RouterModule, ViewsModule, ModelsModule){

    App.Router = RouterModule;
    App.Views = ViewsModule;
    App.Models = ModelsModule;

    console.log(App);

    $(document).ready(function(){

      App.router = new App.Router();
      Backbone.history.start();
      
    });

  });


})(this);
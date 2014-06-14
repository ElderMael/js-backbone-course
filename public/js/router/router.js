define(['backbone', '../views/index'], function(Backbone, Views){

	return Backbone.Router.extend({

		routes: {
			'': 'index'
		},		

		index: function(){
			if(!App.mainView){
				App.mainView = new Views.MainView();
			} else {
				App.mainView.delegateEvents();
			}
			
			var $container = $('div.container');

			$container.children().remove();

			$container.html(App.mainView.render().el);
		}
	});

});
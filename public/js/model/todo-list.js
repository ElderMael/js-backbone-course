define(['backbone'], function(Backbone, todoItem){

	return Backbone.Collection.extend({
		model: todoItem
	});

});
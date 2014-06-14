define(['backbone', 'handlebars', '../templates/index', '../model/index'], function(Backbone, Handlebars, templates, Models){
	return Backbone.View.extend({
		template: templates['mainTemplate'],
		initialize: function(){
			this.model = new Models.TodoItem();
		},
		render: function(){
			this.el = this.template(this.model.toJSON());
			return this;
		}
	});
});
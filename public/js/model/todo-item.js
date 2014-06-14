define(['backbone'], function(Backbone){
	return Backbone.Model.extend({
		defaults:{
			desc: 'This is a To Do item',
			done: false
		},
		toggle: function(){
			this.save({ done: !this.get('done') });
		}
	});
});
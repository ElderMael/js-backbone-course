define(['handlebars', 'text!./main.hbs'], function(Handlebars, mainTemplateString){
	return {
		'mainTemplate' : Handlebars.default.compile(mainTemplateString)
	};
});
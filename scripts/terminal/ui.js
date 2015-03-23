define(['jquery','jterm'], function ($, jterm) {
	var ui = {
		initialize: function (selector, interpreter, terminalConfig) {
			$(selector).terminal(interpreter.parse, terminalConfig);
		}
	};

	console.log('initialize terminal ui:', ui);

	return ui;
});
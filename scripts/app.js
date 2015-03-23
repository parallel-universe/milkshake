define(['terminal/terminal'], function(terminal) {
	var app = {
		initialize: function () {
			terminal.initialize();
		}
	}

	console.log('initialize application:', app);
	return app;
});
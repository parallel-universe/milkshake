define(function () {
	var toolkitLoader = {
		load: function (name, callback, fail) {
			var requirePath = 'toolkit/' + name + '/' + name,
				tool = null,
				that = this;

			require([requirePath], callback, fail);
		}
	};

	console.log('initialise toolkit loader', toolkitLoader);
	return toolkitLoader;
});
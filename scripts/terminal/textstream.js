define([], function () {
	var textStream = {
		terminal: null,
		initialize: function (terminal) {
			this.terminal = terminal;
		},
		write: function (textToWrite) {
			this.terminal.echo(textToWrite);
		}
	};

	console.log('initialize textStream', textStream);
	return textStream
});
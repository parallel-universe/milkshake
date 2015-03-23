define([
	'terminal/ui', 
	'terminal/interpreter',
	'terminal/config'
	], function (ui, interpreter, config) {
	var terminalInstance = null,
		terminal = {
		initialize: function () {
			interpreter.initialize();
			ui.initialize('#main-terminal', interpreter, config);
			
			terminalInstance = interpreter.getTerminal();
		},
		write: function (textToWrite) {
			terminalInstance.echo(textToWrite);
		}
	}

	console.log('initialize terminal:', terminal);

	return terminal;
});
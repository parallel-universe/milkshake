define(['terminal/toolkitloader'], function (toolkitLoader) {
	var args,
		terminal,
		interpreter = {
		initialize: function () {
			// init code
		},
		parse: function (command, term) {
			var commandSegments = getParameters(command),
				toolkitName = commandSegments[0];
			terminal = term;
			args = commandSegments.splice(1);
			toolkitLoader.load(toolkitName, runToolkit, failed);
		},
		getTerminal: function () {
			return terminal;
		}
	};

	function getParameters (command) {
		return command.split(' ');
	}

	function runToolkit (toolkit) {
		toolkit.initialize(args, terminal, interpreter);
	}

	function failed (error) {
		terminal.echo('    [[;#f00;;]unrecognised command, type "man" for the manual]');
		console.log('error loading toolkit', error);
	}
	
	console.log('initialize interpreter:', interpreter);
	return interpreter;
});
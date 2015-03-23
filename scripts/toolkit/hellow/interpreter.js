define(['toolkit/hellow/commands'],function (cli) {
	var args,
		terminal,
		interpreter = {
		initialize: function () {
			// init code..
		},
		parse: function (command, term) {
			var commandSegments = getParameters(command),
				commandName = commandSegments[0];
			terminal = term;
			args = commandSegments.splice(1);
			cli.runCommand(command);
		},
		getTerminal: function () {
			return terminal;
		}
	};

	function getParameters (command) {
		return command.split(' ');
	}
	
	console.log('initialize hellow interpreter:', interpreter);
	return interpreter;
})
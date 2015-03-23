define(function () {
	var toolkitCommands = {
		runCommand: function (command) {
			matchCommand(command);
		}
	};

	function matchCommand (command) {
		switch (command) {
			case 'exit':
				require(['toolkit/hellow/hellow'], function (hellow) {
					hellow.destroy();
				});
				break;
			default:
				console.log('not a command');
				break;
		}
	}

	return toolkitCommands;
});
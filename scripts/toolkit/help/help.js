define([],function () {
	var terminal,
		termArgs,
		help = {
		initialize: function (args, term, appInterpreter) {
			terminal = term;
			termArgs = args;
			help.start();
		},
		start: function () {
			terminal.echo('Welcome to the tutorial');
		}
	};

	return help;
});
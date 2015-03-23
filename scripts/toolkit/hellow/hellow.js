define(['toolkit/hellow/interpreter'],function (interpreter) {
	var terminal,
		termArgs,
		applicationInterpreter,
		hellow = {
		initialize: function (args, term, appInterpreter) {
			applicationInterpreter = appInterpreter;
			terminal = term;
			termArgs = args;
			terminal.setInterpreter(interpreter.parse);
			hellow.initialSetup();
		},
		initialSetup: function () {
			terminal.clear();
			terminal.echo('[[;#f11;;] hello world v1.0]');
			terminal.set_prompt('hellow>');
			hellow.sayHello();
		},
		sayHello: function () {
			var response = 'Hello World!';
			if (termArgs.length > 0) {
				response += ' ..... Arguments: ' + termArgs;
			}
			terminal.echo(response);
		},
		destroy: function () {
			terminal.setInterpreter(applicationInterpreter.parse);
			terminal.set_prompt('sleeper>');
		}
	};

	return hellow;
});
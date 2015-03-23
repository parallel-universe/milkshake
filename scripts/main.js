require.config({
	paths: {
		'jquery': '../../bower_components/jquery.terminal/js/jquery-1.7.1.min',
		'jmousewheel': '../../bower_components/jquery.terminal/js/jquery.mousewheel-min',
		'jterm': '../../bower_components/jquery.terminal/js/jquery.terminal-min'
	},
	shim: {
		'jterm' : {
			deps: ['jquery','jmousewheel'],
			exports: 'jterm'
		},
		'jmousewheel': {
			deps: ['jquery'],
			exports: 'jmousewheel'
		}
	}
});

require(['app'], function (app) {
	app.initialize();
});

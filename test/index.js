'use strict';

var log10 = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(log10, t);

	t.end();
});

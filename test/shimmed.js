'use strict';

require('../auto');

require('../'); // to ensure no side effects

var test = require('tape');
var keys = require('reflect.ownkeys');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Math.log10.length, 1, 'Math.log10 has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Math.log10.name, 'log10', 'Math.log10 has name "log10"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'log10'), 'Math.log10 is not enumerable');
		et.end();
	});

	t.match(keys(Math.log10).sort().join('|'), /^(arguments\|caller\|)?length|name(\|prototype)?$/, 'has no unexpected own keys');

	runTests(Math.log10, t);

	t.end();
});

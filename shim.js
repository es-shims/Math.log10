'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimMathLog10() {
	var polyfill = getPolyfill();
	define(Math, { log10: polyfill });
	return polyfill;
};

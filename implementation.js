'use strict';

var LOG10E = Math.LOG10E;
var log = Math.log;

module.exports = function log10(value) {
	return log(value) * LOG10E;
};

'use strict';

var almostEqual = function (actual, expected) {
	return actual - expected < 1e-6 && expected - actual < 1e-6;
};

module.exports = function (log10, t) {
	t.test('should be correct for edge cases', function (st) {
		st.equal(log10(NaN), NaN, 'log10(NaN)');
		st.equal(log10(-1e-50), NaN, 'log10(-1e-50)');
		st.equal(log10(+0), -Infinity, 'log10(+0)');
		st.equal(log10(-0), -Infinity, 'log10(-0)');
		st.equal(log10(1), +0, 'log10(1)');
		st.equal(log10(Infinity), Infinity, 'log10(Infinity)');
		st.end();
	});

	t.test('should have the right precision', function (st) {
		st.ok(almostEqual(log10(5), 0.698970004336018), 'log10(5)');
		st.ok(almostEqual(log10(50), 1.6989700043360187), 'log10(50)');
		st.end();
	});
};

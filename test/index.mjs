import log10, * as log10Module from 'math.log10';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(log10, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(log10Module).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = log10Module;
	t.equal((await import('math.log10/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('math.log10/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('math.log10/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});

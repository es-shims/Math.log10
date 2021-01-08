# Math.log10 <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.log10` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.log10
```

## Usage/Examples

```js
console.log(Math.log10(2)); // 0.3010299956639812
console.log(Math.log10(1)); // 0
console.log(Math.log10(0)); // -Infinity
console.log(Math.log10(-2)); // NaN
console.log(Math.log10(100000)); // 5
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/math.log10
[npm-version-svg]: https://versionbadg.es/es-shims/Math.log10.svg
[deps-svg]: https://david-dm.org/es-shims/Math.log10.svg
[deps-url]: https://david-dm.org/es-shims/Math.log10
[dev-deps-svg]: https://david-dm.org/es-shims/Math.log10/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.log10#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.log10.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.log10.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.log10.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.log10

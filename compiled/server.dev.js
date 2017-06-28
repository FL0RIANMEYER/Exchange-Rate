require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });exports.httpsKey = exports.httpsCrt = exports.jwtSecret = exports.exchangeRate = exports.mailCredentials = undefined;var _fs = __webpack_require__(12);var _fs2 = _interopRequireDefault(_fs);

var _mailCredentials = __webpack_require__(13);var _mailCredentials2 = _interopRequireDefault(_mailCredentials);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var exchangeRate = '2345493272904cbea4d57eab5f31c10d';
var jwtSecret = 'asdahreghanfkfvjanrgpvnadkj;iwio4ruq3roawjej';

var httpsCrt = _fs2.default.readFileSync(__dirname + '/https.crt');
var httpsKey = _fs2.default.readFileSync(__dirname + '/https.key');exports.


mailCredentials = _mailCredentials2.default;exports.exchangeRate = exchangeRate;exports.jwtSecret = jwtSecret;exports.httpsCrt = httpsCrt;exports.httpsKey = httpsKey;exports.default =
{ mailCredentials: _mailCredentials2.default, exchangeRate: exchangeRate, jwtSecret: jwtSecret, httpsCrt: httpsCrt, httpsKey: httpsKey };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ1xca2V5cy5qcyJdLCJuYW1lcyI6WyJleGNoYW5nZVJhdGUiLCJqd3RTZWNyZXQiLCJodHRwc0NydCIsInJlYWRGaWxlU3luYyIsIl9fZGlybmFtZSIsImh0dHBzS2V5IiwibWFpbENyZWRlbnRpYWxzIl0sIm1hcHBpbmdzIjoiZ01BQUEsd0I7O0FBRUEsb0Q7OztBQUdBLElBQU1BLGVBQWUsa0NBQXJCO0FBQ0EsSUFBTUMsWUFBZSw4Q0FBckI7O0FBRUEsSUFBTUMsV0FBVyxhQUFHQyxZQUFILENBQWdCQyxZQUFZLFlBQTVCLENBQWpCO0FBQ0EsSUFBTUMsV0FBVyxhQUFHRixZQUFILENBQWdCQyxZQUFZLFlBQTVCLENBQWpCLEM7OztBQUdpQkUsZSxxQ0FBaUJOLFksR0FBQUEsWSxTQUFjQyxTLEdBQUFBLFMsU0FBV0MsUSxHQUFBQSxRLFNBQVVHLFEsR0FBQUEsUTtBQUN0RCxFQUFFQywwQ0FBRixFQUFtQk4sMEJBQW5CLEVBQWlDQyxvQkFBakMsRUFBNENDLGtCQUE1QyxFQUFzREcsa0JBQXRELEUiLCJmaWxlIjoia2V5cy5qcyIsInNvdXJjZVJvb3QiOiJFOi9EZXYvQWZ0ZXJTaGlwL0V4Y2hhbmdlUmF0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmltcG9ydCBtYWlsQ3JlZGVudGlhbHMgZnJvbSAnLi9tYWlsQ3JlZGVudGlhbHMnO1xuXG5cbmNvbnN0IGV4Y2hhbmdlUmF0ZSA9ICcyMzQ1NDkzMjcyOTA0Y2JlYTRkNTdlYWI1ZjMxYzEwZCc7XG5jb25zdCBqd3RTZWNyZXQgICAgPSAnYXNkYWhyZWdoYW5ma2Z2amFucmdwdm5hZGtqO2l3aW80cnVxM3JvYXdqZWonO1xuXG5jb25zdCBodHRwc0NydCA9IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL2h0dHBzLmNydCcpO1xuY29uc3QgaHR0cHNLZXkgPSBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9odHRwcy5rZXknKTtcblxuXG5leHBvcnQgICAgICAgICB7IG1haWxDcmVkZW50aWFscywgZXhjaGFuZ2VSYXRlLCBqd3RTZWNyZXQsIGh0dHBzQ3J0LCBodHRwc0tleSB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtYWlsQ3JlZGVudGlhbHMsIGV4Y2hhbmdlUmF0ZSwgand0U2VjcmV0LCBodHRwc0NydCwgaHR0cHNLZXkgfTtcbiJdfQ==
/* WEBPACK VAR INJECTION */}.call(exports, "config"))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _jsonwebtoken = __webpack_require__(11);var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _keys = __webpack_require__(0);
var _jwtDecode = __webpack_require__(14);var _jwtDecode2 = _interopRequireDefault(_jwtDecode);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var jwt = {
    createToken: function createToken(user) {var expiresIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '7d';return (
            _jsonwebtoken2.default.sign(
            { iat: Math.floor(Date.now() / 1000) - 30, data: user }, _keys.jwtSecret,

            { expiresIn: expiresIn, issuer: 'urn:umt' }));},

    verify: function verify(token) {return (
            new Promise(function (resolve, reject) {
                _jsonwebtoken2.default.verify(token, _keys.jwtSecret, { issuer: 'urn:umt' }, function (err, decoded) {
                    if (err) {reject(err);} else
                    {resolve(decoded);}
                });
            }));},
    decode: function decode(token) {return _jwtDecode2.default.decode(token);} };exports.default =



jwt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcand0LmpzIl0sIm5hbWVzIjpbImp3dCIsImNyZWF0ZVRva2VuIiwidXNlciIsImV4cGlyZXNJbiIsInNpZ24iLCJpYXQiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiZGF0YSIsImlzc3VlciIsInZlcmlmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG9rZW4iLCJlcnIiLCJkZWNvZGVkIiwiZGVjb2RlIl0sIm1hcHBpbmdzIjoiMkVBQUEsNEM7QUFDQTtBQUNBLHVDOztBQUVBLElBQU1BLE1BQU07QUFDUkMsaUJBQWEscUJBQUNDLElBQUQsT0FBT0MsU0FBUCx1RUFBbUIsSUFBbkI7QUFDVCxtQ0FBYUMsSUFBYjtBQUNJLGNBQUVDLEtBQUtDLEtBQUtDLEtBQUwsQ0FBV0MsS0FBS0MsR0FBTCxLQUFhLElBQXhCLElBQWdDLEVBQXZDLEVBQTJDQyxNQUFNUixJQUFqRCxFQURKOztBQUdJLGNBQUVDLFdBQVdBLFNBQWIsRUFBd0JRLFFBQVEsU0FBaEMsRUFISixDQURTLEdBREw7O0FBT1JDLFlBQVE7QUFDSixnQkFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM3Qix1Q0FBYUgsTUFBYixDQUFvQkksS0FBcEIsbUJBQXNDLEVBQUVMLFFBQVEsU0FBVixFQUF0QyxFQUE2RCxVQUFDTSxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDM0Usd0JBQUdELEdBQUgsRUFBUSxDQUFFRixPQUFPRSxHQUFQLEVBQWMsQ0FBeEI7QUFDSyxxQkFBRUgsUUFBUUksT0FBUixFQUFtQjtBQUM3QixpQkFIRDtBQUlILGFBTEQsQ0FESSxHQVBBO0FBY1JDLFlBQVEsK0JBQVMsb0JBQVVBLE1BQVYsQ0FBaUJILEtBQWpCLENBQVQsRUFkQSxFQUFaLEM7Ozs7QUFrQmVoQixHIiwiZmlsZSI6Imp3dC5qcyIsInNvdXJjZVJvb3QiOiJFOi9EZXYvQWZ0ZXJTaGlwL0V4Y2hhbmdlUmF0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqc29ud2VidG9rZW4gIGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBqd3RTZWNyZXQgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XG5pbXBvcnQgand0RGVjb2RlICAgICBmcm9tICdqd3QtZGVjb2RlJztcblxuY29uc3Qgand0ID0ge1xuICAgIGNyZWF0ZVRva2VuOiAodXNlciwgZXhwaXJlc0luID0gJzdkJykgPT4gKFxuICAgICAgICBqc29ud2VidG9rZW4uc2lnbihcbiAgICAgICAgICAgIHsgaWF0OiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSAtIDMwLCBkYXRhOiB1c2VyIH0sXG4gICAgICAgICAgICBqd3RTZWNyZXQsXG4gICAgICAgICAgICB7IGV4cGlyZXNJbjogZXhwaXJlc0luLCBpc3N1ZXI6ICd1cm46dW10JyB9XG4gICAgICAgICkpLFxuICAgIHZlcmlmeTogdG9rZW4gPT4gKFxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBqc29ud2VidG9rZW4udmVyaWZ5KHRva2VuLCBqd3RTZWNyZXQsIHsgaXNzdWVyOiAndXJuOnVtdCcgfSwgKGVyciwgZGVjb2RlZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycikgeyByZWplY3QoZXJyKTsgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyByZXNvbHZlKGRlY29kZWQpOyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpLFxuICAgIGRlY29kZTogdG9rZW4gPT4gand0RGVjb2RlLmRlY29kZSh0b2tlbiksXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGp3dDtcbiJdfQ==

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var path = __webpack_require__(5);

var CURRENT_WORKING_DIR = process.cwd();

module.exports = {
    root: CURRENT_WORKING_DIR,
    server: path.resolve(CURRENT_WORKING_DIR, 'server'),
    client: path.resolve(CURRENT_WORKING_DIR, 'app'),
    compiled: path.resolve(CURRENT_WORKING_DIR, 'compiled'),
    modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules') };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ1xccGF0aHMuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJDVVJSRU5UX1dPUktJTkdfRElSIiwicHJvY2VzcyIsImN3ZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyb290Iiwic2VydmVyIiwicmVzb2x2ZSIsImNsaWVudCIsImNvbXBpbGVkIiwibW9kdWxlcyJdLCJtYXBwaW5ncyI6ImFBQUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0FBRUEsSUFBTUMsc0JBQXNCQyxRQUFRQyxHQUFSLEVBQTVCOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2JDLFVBQU1MLG1CQURPO0FBRWJNLFlBQVVSLEtBQUtTLE9BQUwsQ0FBYVAsbUJBQWIsRUFBa0MsUUFBbEMsQ0FGRztBQUdiUSxZQUFVVixLQUFLUyxPQUFMLENBQWFQLG1CQUFiLEVBQWtDLEtBQWxDLENBSEc7QUFJYlMsY0FBVVgsS0FBS1MsT0FBTCxDQUFhUCxtQkFBYixFQUFrQyxVQUFsQyxDQUpHO0FBS2JVLGFBQVVaLEtBQUtTLE9BQUwsQ0FBYVAsbUJBQWIsRUFBa0MsY0FBbEMsQ0FMRyxFQUFqQiIsImZpbGUiOiJwYXRocy5qcyIsInNvdXJjZVJvb3QiOiJFOi9EZXYvQWZ0ZXJTaGlwL0V4Y2hhbmdlUmF0ZSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmNvbnN0IENVUlJFTlRfV09SS0lOR19ESVIgPSBwcm9jZXNzLmN3ZCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICByb290OiBDVVJSRU5UX1dPUktJTkdfRElSLFxuICAgIHNlcnZlcjogICBwYXRoLnJlc29sdmUoQ1VSUkVOVF9XT1JLSU5HX0RJUiwgJ3NlcnZlcicpLFxuICAgIGNsaWVudDogICBwYXRoLnJlc29sdmUoQ1VSUkVOVF9XT1JLSU5HX0RJUiwgJ2FwcCcpLFxuICAgIGNvbXBpbGVkOiBwYXRoLnJlc29sdmUoQ1VSUkVOVF9XT1JLSU5HX0RJUiwgJ2NvbXBpbGVkJyksXG4gICAgbW9kdWxlczogIHBhdGgucmVzb2x2ZShDVVJSRU5UX1dPUktJTkdfRElSLCAnbm9kZV9tb2R1bGVzJyksXG59O1xuIl19

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.policies = exports.authorization = undefined;var _authorization = __webpack_require__(21);var _authorization2 = _interopRequireDefault(_authorization);
var _policies = __webpack_require__(22);var _policies2 = _interopRequireDefault(_policies);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.


authorization = _authorization2.default;exports.policies = _policies2.default;exports.default =
[_authorization2.default, _policies2.default];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcbWlkZGxld2FyZVxcaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aG9yaXphdGlvbiIsInBvbGljaWVzIl0sIm1hcHBpbmdzIjoiZ0lBQUEsZ0Q7QUFDQSxzQzs7O0FBR2lCQSxhLG1DQUFlQyxRO0FBQ2pCLDZDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L0Rldi9BZnRlclNoaXAvRXhjaGFuZ2VSYXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGhvcml6YXRpb24gZnJvbSAnLi9hdXRob3JpemF0aW9uJztcbmltcG9ydCBwb2xpY2llcyAgICAgIGZyb20gJy4vcG9saWNpZXMnO1xuXG5cbmV4cG9ydCAgICAgICAgIHsgYXV0aG9yaXphdGlvbiwgcG9saWNpZXMgfTtcbmV4cG9ydCBkZWZhdWx0IFsgYXV0aG9yaXphdGlvbiwgcG9saWNpZXMgXTtcbiJdfQ==

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(9);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var initMemCache = function () {var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(


























    function _callee5() {return regeneratorRuntime.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.t0 =
                        _services2.default.memCache;_context5.next = 3;return _services2.default.openExchange.getCurrencies();case 3:_context5.t1 = _context5.sent;_context5.t0.setValue.call(_context5.t0, 'currencies', _context5.t1);
                        setInterval(function () {
                            _services2.default.openExchange.getLatest();
                        }, 24 * 60 * 60 * 100);case 6:case 'end':return _context5.stop();}}}, _callee5, this);}));return function initMemCache() {return _ref7.apply(this, arguments);};}();var _env = __webpack_require__(10);var _jwt = __webpack_require__(2);var _jwt2 = _interopRequireDefault(_jwt);var _server = __webpack_require__(15);var _server2 = _interopRequireDefault(_server);var _services = __webpack_require__(27);var _services2 = _interopRequireDefault(_services);var _transformer = __webpack_require__(34);var _transformer2 = _interopRequireDefault(_transformer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}var server = new _server2.default(_env.httpsPort, _env.httpPort, _services2.default);server.on('signup', function (user) {return _services2.default.mailHandler.sendToken({ hostname: _env.hostname, port: _env.httpsPort }, _jwt2.default.createToken(user, '30m'), user);});server.on('getCurrencies', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return _services2.default.cacheHandler.getValue('currencies');case 2:return _context.abrupt('return', _context.sent);case 3:case 'end':return _context.stop();}}}, _callee, undefined);})));server.on('getExchange', function () {var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(_ref3) {var amount = _ref3.amount,from = _ref3.from,to = _ref3.to;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.t0 = _transformer2.default;_context2.t1 = amount;_context2.t2 = from;_context2.t3 = to;_context2.next = 6;return _services2.default.cacheHandler.getValue('latest');case 6:_context2.t4 = _context2.sent;return _context2.abrupt('return', _context2.t0.exchange.call(_context2.t0, _context2.t1, _context2.t2, _context2.t3, _context2.t4));case 8:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function (_x) {return _ref2.apply(this, arguments);};}());server.on('getTime-series', function () {var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(_ref5) {var amount = _ref5.amount,from = _ref5.from,to = _ref5.to,dateFrom = _ref5.dateFrom,dateTo = _ref5.dateTo;return regeneratorRuntime.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return Promise.all(_transformer2.default.dateToSteps(dateFrom, dateTo).map(function () {var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(date) {return regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.t0 = _transformer2.default;_context3.t1 = amount;_context3.t2 = from;_context3.t3 = to;_context3.next = 6;return _services2.default.cacheHandler.getValue(date);case 6:_context3.t4 = _context3.sent;return _context3.abrupt('return', _context3.t0.exchange.call(_context3.t0, _context3.t1, _context3.t2, _context3.t3, _context3.t4));case 8:case 'end':return _context3.stop();}}}, _callee3, undefined);}));return function (_x3) {return _ref6.apply(this, arguments);};}()));case 2:return _context4.abrupt('return', _context4.sent);case 3:case 'end':return _context4.stop();}}}, _callee4, undefined);}));return function (_x2) {return _ref4.apply(this, arguments);};}()); // initMemCache();
initMemCacheTestData();

function initMemCacheTestData() {
    // Use mocked data for development to reduce rare api requests
    var currencies = __webpack_require__(37);
    var latest = __webpack_require__(38);

    _services2.default.memCache.setValue('currencies', currencies);
    _services2.default.memCache.setValue('latest', latest);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcaW5kZXguanMiXSwibmFtZXMiOlsibWVtQ2FjaGUiLCJvcGVuRXhjaGFuZ2UiLCJnZXRDdXJyZW5jaWVzIiwic2V0VmFsdWUiLCJzZXRJbnRlcnZhbCIsImdldExhdGVzdCIsImluaXRNZW1DYWNoZSIsInNlcnZlciIsIm9uIiwidXNlciIsIm1haWxIYW5kbGVyIiwic2VuZFRva2VuIiwiaG9zdG5hbWUiLCJwb3J0IiwiY3JlYXRlVG9rZW4iLCJjYWNoZUhhbmRsZXIiLCJnZXRWYWx1ZSIsImFtb3VudCIsImZyb20iLCJ0byIsImV4Y2hhbmdlIiwiZGF0ZUZyb20iLCJkYXRlVG8iLCJQcm9taXNlIiwiYWxsIiwiZGF0ZVRvU3RlcHMiLCJtYXAiLCJkYXRlIiwiaW5pdE1lbUNhY2hlVGVzdERhdGEiLCJjdXJyZW5jaWVzIiwicmVxdWlyZSIsImxhdGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0ksMkNBQVNBLFFBRGIsMkJBQ21ELG1CQUFTQyxZQUFULENBQXNCQyxhQUF0QixFQURuRCxtREFDc0JDLFFBRHRCLG9CQUMrQixZQUQvQjtBQUVJQyxvQ0FBWSxZQUFNO0FBQ2QsK0NBQVNILFlBQVQsQ0FBc0JJLFNBQXRCO0FBQ0gseUJBRkQsRUFFRyxLQUFHLEVBQUgsR0FBTSxFQUFOLEdBQVMsR0FGWixFQUZKLGdFLG1CQUFlQyxZLDhDQTNCZixvQ0FDQSw0Qix5Q0FFQSxrQywrQ0FDQSxzQyxtREFDQSw0Qyx1a0JBR0EsSUFBTUMsU0FBUyx1RUFBZixDQUdBQSxPQUFPQyxFQUFQLENBQVUsUUFBVixFQUFvQixVQUFDQyxJQUFELFVBQ2hCLG1CQUFTQyxXQUFULENBQXFCQyxTQUFyQixDQUErQixFQUFFQyx1QkFBRixFQUFZQyxvQkFBWixFQUEvQixFQUE4RCxjQUFJQyxXQUFKLENBQWdCTCxJQUFoQixFQUFzQixLQUF0QixDQUE5RCxFQUE0RkEsSUFBNUYsQ0FEZ0IsRUFBcEIsRUFHQUYsT0FBT0MsRUFBUCxDQUFVLGVBQVYsNENBQTJCLG1LQUFrQixtQkFBU08sWUFBVCxDQUFzQkMsUUFBdEIsQ0FBK0IsWUFBL0IsQ0FBbEIsMkhBQTNCLElBRUFULE9BQU9DLEVBQVAsQ0FBVSxhQUFWLHFFQUF5Qiw4QkFBU1MsTUFBVCxTQUFTQSxNQUFULENBQWlCQyxJQUFqQixTQUFpQkEsSUFBakIsQ0FBdUJDLEVBQXZCLFNBQXVCQSxFQUF2QiwrS0FDQUYsTUFEQSxnQkFDUUMsSUFEUixnQkFDY0MsRUFEZCwyQkFDd0IsbUJBQVNKLFlBQVQsQ0FBc0JDLFFBQXRCLENBQStCLFFBQS9CLENBRHhCLHFGQUNUSSxRQURTLGtKQUF6QixvRUFHQWIsT0FBT0MsRUFBUCxDQUFVLGdCQUFWLHFFQUE0Qiw4QkFBU1MsTUFBVCxTQUFTQSxNQUFULENBQWlCQyxJQUFqQixTQUFpQkEsSUFBakIsQ0FBdUJDLEVBQXZCLFNBQXVCQSxFQUF2QixDQUEyQkUsUUFBM0IsU0FBMkJBLFFBQTNCLENBQXFDQyxNQUFyQyxTQUFxQ0EsTUFBckMscUpBQ2xCQyxRQUFRQyxHQUFSLENBQVksc0JBQVlDLFdBQVosQ0FBd0JKLFFBQXhCLEVBQWtDQyxNQUFsQyxFQUEwQ0ksR0FBMUMsb0VBQThDLGtCQUFNQyxJQUFOLGlMQUN2Q1YsTUFEdUMsZ0JBQy9CQyxJQUQrQixnQkFDekJDLEVBRHlCLDJCQUNmLG1CQUFTSixZQUFULENBQXNCQyxRQUF0QixDQUErQlcsSUFBL0IsQ0FEZSxxRkFDaERQLFFBRGdELGtKQUE5QyxvRUFBWixDQURrQiwrSEFBNUIscUUsQ0FJQTtBQUNBUTs7QUFVQSxTQUFTQSxvQkFBVCxHQUFnQztBQUM1QjtBQUNBLFFBQU1DLGFBQWFDLFFBQVEsa0NBQVIsQ0FBbkI7QUFDQSxRQUFNQyxTQUFhRCxRQUFRLDhCQUFSLENBQW5COztBQUVBLHVCQUFTOUIsUUFBVCxDQUFrQkcsUUFBbEIsQ0FBMkIsWUFBM0IsRUFBeUMwQixVQUF6QztBQUNBLHVCQUFTN0IsUUFBVCxDQUFrQkcsUUFBbEIsQ0FBMkIsUUFBM0IsRUFBeUM0QixNQUF6QztBQUNIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L0Rldi9BZnRlclNoaXAvRXhjaGFuZ2VSYXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9zdG5hbWUsIGh0dHBzUG9ydCwgaHR0cFBvcnQgfSBmcm9tICcuLi9jb25maWcvZW52JztcbmltcG9ydCBqd3QgZnJvbSAnLi9qd3QnO1xuXG5pbXBvcnQgU2VydmVyICAgICAgZnJvbSAnLi9zZXJ2ZXInO1xuaW1wb3J0IHNlcnZpY2VzICAgIGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHRyYW5zZm9ybWVyIGZyb20gJy4vdHJhbnNmb3JtZXInO1xuXG5cbmNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIoaHR0cHNQb3J0LCBodHRwUG9ydCwgc2VydmljZXMpO1xuXG5cbnNlcnZlci5vbignc2lnbnVwJywgKHVzZXIpID0+XG4gICAgc2VydmljZXMubWFpbEhhbmRsZXIuc2VuZFRva2VuKHsgaG9zdG5hbWUsIHBvcnQ6IGh0dHBzUG9ydCB9LCBqd3QuY3JlYXRlVG9rZW4odXNlciwgJzMwbScpLCB1c2VyKSk7XG5cbnNlcnZlci5vbignZ2V0Q3VycmVuY2llcycsIGFzeW5jICgpID0+IGF3YWl0IHNlcnZpY2VzLmNhY2hlSGFuZGxlci5nZXRWYWx1ZSgnY3VycmVuY2llcycpKTtcblxuc2VydmVyLm9uKCdnZXRFeGNoYW5nZScsIGFzeW5jICh7IGFtb3VudCwgZnJvbSwgdG8gfSkgPT5cbiAgICB0cmFuc2Zvcm1lci5leGNoYW5nZShhbW91bnQsIGZyb20sIHRvLCBhd2FpdCBzZXJ2aWNlcy5jYWNoZUhhbmRsZXIuZ2V0VmFsdWUoJ2xhdGVzdCcpKSk7XG5cbnNlcnZlci5vbignZ2V0VGltZS1zZXJpZXMnLCBhc3luYyAoeyBhbW91bnQsIGZyb20sIHRvLCBkYXRlRnJvbSwgZGF0ZVRvIH0pID0+XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwodHJhbnNmb3JtZXIuZGF0ZVRvU3RlcHMoZGF0ZUZyb20sIGRhdGVUbykubWFwKGFzeW5jIGRhdGUgPT5cbiAgICAgICAgdHJhbnNmb3JtZXIuZXhjaGFuZ2UoYW1vdW50LCBmcm9tLCB0bywgYXdhaXQgc2VydmljZXMuY2FjaGVIYW5kbGVyLmdldFZhbHVlKGRhdGUpKSkpKTtcblxuLy8gaW5pdE1lbUNhY2hlKCk7XG5pbml0TWVtQ2FjaGVUZXN0RGF0YSgpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRNZW1DYWNoZSgpIHtcbiAgICBzZXJ2aWNlcy5tZW1DYWNoZS5zZXRWYWx1ZSgnY3VycmVuY2llcycsIGF3YWl0IHNlcnZpY2VzLm9wZW5FeGNoYW5nZS5nZXRDdXJyZW5jaWVzKCkpO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2VydmljZXMub3BlbkV4Y2hhbmdlLmdldExhdGVzdCgpO1xuICAgIH0sIDI0KjYwKjYwKjEwMCk7XG59XG5cbmZ1bmN0aW9uIGluaXRNZW1DYWNoZVRlc3REYXRhKCkge1xuICAgIC8vIFVzZSBtb2NrZWQgZGF0YSBmb3IgZGV2ZWxvcG1lbnQgdG8gcmVkdWNlIHJhcmUgYXBpIHJlcXVlc3RzXG4gICAgY29uc3QgY3VycmVuY2llcyA9IHJlcXVpcmUoJy4uL3Rlc3QvZHVteURhdGEvY3VycmVuY2llcy5qc29uJyk7XG4gICAgY29uc3QgbGF0ZXN0ICAgICA9IHJlcXVpcmUoJy4uL3Rlc3QvZHVteURhdGEvbGF0ZXN0Lmpzb24nKTtcblxuICAgIHNlcnZpY2VzLm1lbUNhY2hlLnNldFZhbHVlKCdjdXJyZW5jaWVzJywgY3VycmVuY2llcyk7XG4gICAgc2VydmljZXMubWVtQ2FjaGUuc2V0VmFsdWUoJ2xhdGVzdCcsICAgICBsYXRlc3QgICAgKTtcbn1cbiJdfQ==

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var httpsPort = process.env.HTTPS_PORT || 3331;
var httpPort = process.env.HTTP_PORT || 3030;
var hostname = process.env.HOSTNAME || 'localhost';exports.


hostname = hostname;exports.httpsPort = httpsPort;exports.httpPort = httpPort;exports.default =
{ hostname: hostname, httpsPort: httpsPort, httpPort: httpPort };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ1xcZW52LmpzIl0sIm5hbWVzIjpbImh0dHBzUG9ydCIsInByb2Nlc3MiLCJlbnYiLCJIVFRQU19QT1JUIiwiaHR0cFBvcnQiLCJIVFRQX1BPUlQiLCJob3N0bmFtZSIsIkhPU1ROQU1FIl0sIm1hcHBpbmdzIjoiMkVBQUEsSUFBTUEsWUFBWUMsUUFBUUMsR0FBUixDQUFZQyxVQUFaLElBQTBCLElBQTVDO0FBQ0EsSUFBTUMsV0FBWUgsUUFBUUMsR0FBUixDQUFZRyxTQUFaLElBQTBCLElBQTVDO0FBQ0EsSUFBTUMsV0FBWUwsUUFBUUMsR0FBUixDQUFZSyxRQUFaLElBQTBCLFdBQTVDLEM7OztBQUdpQkQsUSxHQUFBQSxRLFNBQVVOLFMsR0FBQUEsUyxTQUFXSSxRLEdBQUFBLFE7QUFDdkIsRUFBRUUsa0JBQUYsRUFBWU4sb0JBQVosRUFBdUJJLGtCQUF2QixFIiwiZmlsZSI6ImVudi5qcyIsInNvdXJjZVJvb3QiOiJFOi9EZXYvQWZ0ZXJTaGlwL0V4Y2hhbmdlUmF0ZSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGh0dHBzUG9ydCA9IHByb2Nlc3MuZW52LkhUVFBTX1BPUlQgfHwgMzMzMTtcbmNvbnN0IGh0dHBQb3J0ICA9IHByb2Nlc3MuZW52LkhUVFBfUE9SVCAgfHwgMzAzMDtcbmNvbnN0IGhvc3RuYW1lICA9IHByb2Nlc3MuZW52LkhPU1ROQU1FICAgfHwgJ2xvY2FsaG9zdCc7XG5cblxuZXhwb3J0ICAgICAgICAgeyBob3N0bmFtZSwgaHR0cHNQb3J0LCBodHRwUG9ydCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBob3N0bmFtZSwgaHR0cHNQb3J0LCBodHRwUG9ydCB9O1xuIl19

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
    user: 'florian.meyer86@gmail.com',
    password: 'rllmubxrvxlsddcb',
    host: 'smtp.gmail.com',
    ssl: true };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ1xcbWFpbENyZWRlbnRpYWxzLmpzIl0sIm5hbWVzIjpbInVzZXIiLCJwYXNzd29yZCIsImhvc3QiLCJzc2wiXSwibWFwcGluZ3MiOiI2RkFBZTtBQUNYQSxVQUFTLDJCQURFO0FBRVhDLGNBQVUsa0JBRkM7QUFHWEMsVUFBUyxnQkFIRTtBQUlYQyxTQUFTLElBSkUsRSIsImZpbGUiOiJtYWlsQ3JlZGVudGlhbHMuanMiLCJzb3VyY2VSb290IjoiRTovRGV2L0FmdGVyU2hpcC9FeGNoYW5nZVJhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgdXNlcjogICAgJ2Zsb3JpYW4ubWV5ZXI4NkBnbWFpbC5jb20nLFxuICAgIHBhc3N3b3JkOiAncmxsbXVieHJ2eGxzZGRjYicsXG4gICAgaG9zdDogICAgJ3NtdHAuZ21haWwuY29tJyxcbiAgICBzc2w6ICAgICB0cnVlLFxufTtcbiJdfQ==

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _spdy = __webpack_require__(16);var _spdy2 = _interopRequireDefault(_spdy);
var _http = __webpack_require__(3);var _http2 = _interopRequireDefault(_http);
var _express = __webpack_require__(1);var _express2 = _interopRequireDefault(_express);
var _bodyParser = __webpack_require__(17);var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _paths = __webpack_require__(4);var _paths2 = _interopRequireDefault(_paths);
var _keys = __webpack_require__(0);

var _eventListener = __webpack_require__(18);var _eventListener2 = _interopRequireDefault(_eventListener);
var _routes = __webpack_require__(19);var _routes2 = _interopRequireDefault(_routes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var Server = function Server(httpsPort, httpPort, services) {
    var app = (0, _express2.default)();
    var http2Server = _spdy2.default.createServer({ key: _keys.httpsKey, cert: _keys.httpsCrt }, app);
    var eventListener = new _eventListener2.default();


    this.on = eventListener.on;

    app.use(_bodyParser2.default.urlencoded({ extended: false }));
    app.use(_bodyParser2.default.json());
    app.use(_express2.default.static(_paths2.default.compiled));

    for (var name in _routes2.default)
    {_routes2.default[name](app, services, eventListener);}

    _http2.default.createServer(function (req, res) {
        res.writeHead(301, { 'Location': 'https://' + req.headers['host'].replace(httpPort, httpsPort) + req.url });
        res.end();
    }).listen(httpPort);

    http2Server.listen(httpsPort, function (error) {
        if (error) {console.error(error);}
        console.log('Server is running on Port ' + httpsPort);
    });
};exports.default =


Server;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcc2VydmVyLmpzIl0sIm5hbWVzIjpbIlNlcnZlciIsImh0dHBzUG9ydCIsImh0dHBQb3J0Iiwic2VydmljZXMiLCJhcHAiLCJodHRwMlNlcnZlciIsImNyZWF0ZVNlcnZlciIsImtleSIsImNlcnQiLCJldmVudExpc3RlbmVyIiwib24iLCJ1c2UiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwic3RhdGljIiwiY29tcGlsZWQiLCJuYW1lIiwicmVxIiwicmVzIiwid3JpdGVIZWFkIiwiaGVhZGVycyIsInJlcGxhY2UiLCJ1cmwiLCJlbmQiLCJsaXN0ZW4iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiIyRUFBQSw0QjtBQUNBLDRCO0FBQ0Esa0M7QUFDQSx5Qzs7QUFFQSx3QztBQUNBOztBQUVBLGdEO0FBQ0Esa0M7OztBQUdBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFTQyxTQUFULEVBQW9CQyxRQUFwQixFQUE4QkMsUUFBOUIsRUFBd0M7QUFDbkQsUUFBTUMsTUFBZ0Isd0JBQXRCO0FBQ0EsUUFBTUMsY0FBZ0IsZUFBS0MsWUFBTCxDQUFrQixFQUFFQyxtQkFBRixFQUFPQyxvQkFBUCxFQUFsQixFQUFpQ0osR0FBakMsQ0FBdEI7QUFDQSxRQUFNSyxnQkFBZ0IsNkJBQXRCOzs7QUFHQSxTQUFLQyxFQUFMLEdBQVVELGNBQWNDLEVBQXhCOztBQUVBTixRQUFJTyxHQUFKLENBQVEscUJBQVdDLFVBQVgsQ0FBc0IsRUFBRUMsVUFBVSxLQUFaLEVBQXRCLENBQVI7QUFDQVQsUUFBSU8sR0FBSixDQUFRLHFCQUFXRyxJQUFYLEVBQVI7QUFDQVYsUUFBSU8sR0FBSixDQUFRLGtCQUFRSSxNQUFSLENBQWUsZ0JBQU1DLFFBQXJCLENBQVI7O0FBRUEsU0FBSyxJQUFJQyxJQUFUO0FBQ0EsS0FBRSxpQkFBT0EsSUFBUCxFQUFhYixHQUFiLEVBQWtCRCxRQUFsQixFQUE0Qk0sYUFBNUIsRUFBNkM7O0FBRS9DLG1CQUFLSCxZQUFMLENBQWtCLFVBQUNZLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzVCQSxZQUFJQyxTQUFKLENBQWMsR0FBZCxFQUFtQixFQUFFLFlBQVksYUFBYUYsSUFBSUcsT0FBSixDQUFZLE1BQVosRUFBb0JDLE9BQXBCLENBQTRCcEIsUUFBNUIsRUFBc0NELFNBQXRDLENBQWIsR0FBZ0VpQixJQUFJSyxHQUFsRixFQUFuQjtBQUNBSixZQUFJSyxHQUFKO0FBQ0gsS0FIRCxFQUdHQyxNQUhILENBR1V2QixRQUhWOztBQUtBRyxnQkFBWW9CLE1BQVosQ0FBbUJ4QixTQUFuQixFQUE4QixVQUFDeUIsS0FBRCxFQUFXO0FBQ3JDLFlBQUlBLEtBQUosRUFBVyxDQUFFQyxRQUFRRCxLQUFSLENBQWNBLEtBQWQsRUFBdUI7QUFDcENDLGdCQUFRQyxHQUFSLGdDQUF5QzNCLFNBQXpDO0FBQ0gsS0FIRDtBQUlILENBeEJELEM7OztBQTJCZUQsTSIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiRTovRGV2L0FmdGVyU2hpcC9FeGNoYW5nZVJhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3BkeSAgICAgICBmcm9tICdzcGR5JztcbmltcG9ydCBodHRwICAgICAgIGZyb20gJ2h0dHAnO1xuaW1wb3J0IGV4cHJlc3MgICAgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5cbmltcG9ydCBQQVRIUyBmcm9tICcuLi9jb25maWcvcGF0aHMnO1xuaW1wb3J0IHsgaHR0cHNDcnQgYXMgY2VydCwgaHR0cHNLZXkgYXMga2V5IH0gZnJvbSAnLi4vY29uZmlnL2tleXMnO1xuXG5pbXBvcnQgRXZlbnRMaXN0ZW5lciBmcm9tICcuL2V2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHJvdXRlcyAgICAgICAgZnJvbSAnLi9yb3V0ZXMnO1xuXG5cbmNvbnN0IFNlcnZlciA9IGZ1bmN0aW9uKGh0dHBzUG9ydCwgaHR0cFBvcnQsIHNlcnZpY2VzKSB7XG4gICAgY29uc3QgYXBwICAgICAgICAgICA9IGV4cHJlc3MoKTtcbiAgICBjb25zdCBodHRwMlNlcnZlciAgID0gc3BkeS5jcmVhdGVTZXJ2ZXIoeyBrZXksIGNlcnQgfSwgYXBwKTtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gbmV3IEV2ZW50TGlzdGVuZXIoKTtcblxuXG4gICAgdGhpcy5vbiA9IGV2ZW50TGlzdGVuZXIub247XG5cbiAgICBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgYXBwLnVzZShleHByZXNzLnN0YXRpYyhQQVRIUy5jb21waWxlZCkpO1xuXG4gICAgZm9yIChsZXQgbmFtZSBpbiByb3V0ZXMpXG4gICAgeyByb3V0ZXNbbmFtZV0oYXBwLCBzZXJ2aWNlcywgZXZlbnRMaXN0ZW5lcik7IH1cblxuICAgIGh0dHAuY3JlYXRlU2VydmVyKChyZXEsIHJlcykgPT4ge1xuICAgICAgICByZXMud3JpdGVIZWFkKDMwMSwgeyAnTG9jYXRpb24nOiAnaHR0cHM6Ly8nICsgcmVxLmhlYWRlcnNbJ2hvc3QnXS5yZXBsYWNlKGh0dHBQb3J0LCBodHRwc1BvcnQpICsgcmVxLnVybCB9KTtcbiAgICAgICAgcmVzLmVuZCgpO1xuICAgIH0pLmxpc3RlbihodHRwUG9ydCk7XG5cbiAgICBodHRwMlNlcnZlci5saXN0ZW4oaHR0cHNQb3J0LCAoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZyBvbiBQb3J0ICR7aHR0cHNQb3J0fWApO1xuICAgIH0pO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXI7XG4iXX0=

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("spdy");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}var EventListener = function EventListener() {var _this = this;
    var eventListener = {};


    this.on = function (event, fn) {
        eventListener[event] = eventListener[event] || [];
        eventListener[event].push(fn);
    };

    this.callListeners = function () {var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(event) {for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {args[_key - 1] = arguments[_key];}return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                            eventListener[event]) {_context.next = 2;break;}return _context.abrupt("return");case 2:_context.next = 4;return (
                                Promise.race(eventListener[event].map(function (listener) {return listener.apply(undefined, args);})));case 4:return _context.abrupt("return", _context.sent);case 5:case "end":return _context.stop();}}}, _callee, _this);}));return function (_x) {return _ref.apply(this, arguments);};}();


    this.removeListener = function (listener, event) {
        if (event) {
            eventListener[event] = eventListener[event].filter(function (el) {return el !== listener;});
        } else {
            for (var _event in eventListener) {
                eventListener[_event] = eventListener[_event].filter(function (el) {return el !== listener;});
            }
        }
    };
};exports.default =


function () {return new EventListener();};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcZXZlbnRMaXN0ZW5lci5qcyJdLCJuYW1lcyI6WyJFdmVudExpc3RlbmVyIiwiZXZlbnRMaXN0ZW5lciIsIm9uIiwiZXZlbnQiLCJmbiIsInB1c2giLCJjYWxsTGlzdGVuZXJzIiwiYXJncyIsIlByb21pc2UiLCJyYWNlIiwibWFwIiwibGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImZpbHRlciIsImVsIl0sIm1hcHBpbmdzIjoiNGZBQUEsSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFXO0FBQzdCLFFBQU1DLGdCQUFnQixFQUF0Qjs7O0FBR0EsU0FBS0MsRUFBTCxHQUFVLFVBQUNDLEtBQUQsRUFBUUMsRUFBUixFQUFlO0FBQ3JCSCxzQkFBY0UsS0FBZCxJQUF1QkYsY0FBY0UsS0FBZCxLQUF3QixFQUEvQztBQUNBRixzQkFBY0UsS0FBZCxFQUFxQkUsSUFBckIsQ0FBMEJELEVBQTFCO0FBQ0gsS0FIRDs7QUFLQSxTQUFLRSxhQUFMLHFFQUFxQixpQkFBT0gsS0FBUCxxQ0FBaUJJLElBQWpCLG1FQUFpQkEsSUFBakI7QUFDYk4sMENBQWNFLEtBQWQsQ0FEYTtBQUVKSyx3Q0FBUUMsSUFBUixDQUFhUixjQUFjRSxLQUFkLEVBQXFCTyxHQUFyQixDQUF5Qiw0QkFBWUMsMEJBQVlKLElBQVosQ0FBWixFQUF6QixDQUFiLENBRkksd0hBQXJCOzs7QUFLQSxTQUFLSyxjQUFMLEdBQXNCLFVBQUNELFFBQUQsRUFBV1IsS0FBWCxFQUFxQjtBQUN2QyxZQUFHQSxLQUFILEVBQVU7QUFDTkYsMEJBQWNFLEtBQWQsSUFBdUJGLGNBQWNFLEtBQWQsRUFBcUJVLE1BQXJCLENBQTRCLHNCQUFNQyxPQUFPSCxRQUFiLEVBQTVCLENBQXZCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsaUJBQUssSUFBSVIsTUFBVCxJQUFrQkYsYUFBbEIsRUFBaUM7QUFDN0JBLDhCQUFjRSxNQUFkLElBQXVCRixjQUFjRSxNQUFkLEVBQXFCVSxNQUFyQixDQUE0QixzQkFBTUMsT0FBT0gsUUFBYixFQUE1QixDQUF2QjtBQUNIO0FBQ0o7QUFDSixLQVJEO0FBU0gsQ0F2QkQsQzs7O0FBMEJlLG9CQUFNLElBQUlYLGFBQUosRUFBTixFIiwiZmlsZSI6ImV2ZW50TGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiRTovRGV2L0FmdGVyU2hpcC9FeGNoYW5nZVJhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHt9O1xuXG4gICAgXG4gICAgdGhpcy5vbiA9IChldmVudCwgZm4pID0+IHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcltldmVudF0gPSBldmVudExpc3RlbmVyW2V2ZW50XSB8fCBbXTtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcltldmVudF0ucHVzaChmbik7XG4gICAgfTtcblxuICAgIHRoaXMuY2FsbExpc3RlbmVycyA9IGFzeW5jIChldmVudCwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZighZXZlbnRMaXN0ZW5lcltldmVudF0pIHsgcmV0dXJuOyB9XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJhY2UoZXZlbnRMaXN0ZW5lcltldmVudF0ubWFwKGxpc3RlbmVyID0+IGxpc3RlbmVyKC4uLmFyZ3MpKSk7XG4gICAgfTtcblxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIgPSAobGlzdGVuZXIsIGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVyW2V2ZW50XSA9IGV2ZW50TGlzdGVuZXJbZXZlbnRdLmZpbHRlcihlbCA9PiBlbCAhPT0gbGlzdGVuZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgZXZlbnQgaW4gZXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJbZXZlbnRdID0gZXZlbnRMaXN0ZW5lcltldmVudF0uZmlsdGVyKGVsID0+IGVsICE9PSBsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBuZXcgRXZlbnRMaXN0ZW5lcigpO1xuIl19

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.privateApi = exports.publicApi = exports.web = undefined;var _web = __webpack_require__(20);var _web2 = _interopRequireDefault(_web);
var _publicApi = __webpack_require__(25);var _publicApi2 = _interopRequireDefault(_publicApi);
var _privateApi = __webpack_require__(26);var _privateApi2 = _interopRequireDefault(_privateApi);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.


web = _web2.default;exports.publicApi = _publicApi2.default;exports.privateApi = _privateApi2.default;exports.default =
{ web: _web2.default, publicApi: _publicApi2.default, privateApi: _privateApi2.default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxccm91dGVzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJ3ZWIiLCJwdWJsaWNBcGkiLCJwcml2YXRlQXBpIl0sIm1hcHBpbmdzIjoiNElBQUEsNEI7QUFDQSx3QztBQUNBLDBDOzs7QUFHaUJBLEcseUJBQUtDLFMsK0JBQVdDLFU7QUFDbEIsRUFBRUYsa0JBQUYsRUFBT0MsOEJBQVAsRUFBa0JDLGdDQUFsQixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L0Rldi9BZnRlclNoaXAvRXhjaGFuZ2VSYXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYiAgICAgICAgZnJvbSAnLi93ZWInO1xuaW1wb3J0IHB1YmxpY0FwaSAgZnJvbSAnLi9wdWJsaWNBcGknO1xuaW1wb3J0IHByaXZhdGVBcGkgZnJvbSAnLi9wcml2YXRlQXBpJztcblxuXG5leHBvcnQgICAgICAgICB7IHdlYiwgcHVibGljQXBpLCBwcml2YXRlQXBpIH07XG5leHBvcnQgZGVmYXVsdCB7IHdlYiwgcHVibGljQXBpLCBwcml2YXRlQXBpIH07XG4iXX0=

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _path = __webpack_require__(5);var _path2 = _interopRequireDefault(_path);
var _express = __webpack_require__(1);var _express2 = _interopRequireDefault(_express);

var _middleware = __webpack_require__(6);

var _paths = __webpack_require__(4);var _paths2 = _interopRequireDefault(_paths);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =


function (app, services, eventListener) {
    var router = _express2.default.Router();

    app.use(router);

    router.get('/', (0, _middleware.authorization)(services), function (req, res) {
        res.sendFile(_path2.default.join(_paths2.default.client, '/index.html'));
    });

    router.post('/signup', function (req, res) {
        if (!req.body || !req.body.user) {res.status(400).send('Invalid user parameter');return;}

        eventListener.callListeners('signup', req.body.user);
        res.send('Check your mails');
    });


    return router;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxccm91dGVzXFx3ZWIuanMiXSwibmFtZXMiOlsiYXBwIiwic2VydmljZXMiLCJldmVudExpc3RlbmVyIiwicm91dGVyIiwiUm91dGVyIiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZEZpbGUiLCJqb2luIiwiY2xpZW50IiwicG9zdCIsImJvZHkiLCJ1c2VyIiwic3RhdHVzIiwic2VuZCIsImNhbGxMaXN0ZW5lcnMiXSwibWFwcGluZ3MiOiIyRUFBQSw0QjtBQUNBLGtDOztBQUVBOztBQUVBLDJDOzs7QUFHZSxVQUFDQSxHQUFELEVBQU1DLFFBQU4sRUFBZ0JDLGFBQWhCLEVBQWtDO0FBQzdDLFFBQU1DLFNBQVMsa0JBQVFDLE1BQVIsRUFBZjs7QUFFQUosUUFBSUssR0FBSixDQUFRRixNQUFSOztBQUVBQSxXQUFPRyxHQUFQLENBQVcsR0FBWCxFQUFnQiwrQkFBY0wsUUFBZCxDQUFoQixFQUF5QyxVQUFDTSxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNuREEsWUFBSUMsUUFBSixDQUFhLGVBQUtDLElBQUwsQ0FBVSxnQkFBTUMsTUFBaEIsRUFBd0IsYUFBeEIsQ0FBYjtBQUNILEtBRkQ7O0FBSUFSLFdBQU9TLElBQVAsQ0FBWSxTQUFaLEVBQXVCLFVBQUNMLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2pDLFlBQUcsQ0FBQ0QsSUFBSU0sSUFBTCxJQUFhLENBQUNOLElBQUlNLElBQUosQ0FBU0MsSUFBMUIsRUFBZ0MsQ0FBRU4sSUFBSU8sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLHdCQUFyQixFQUFnRCxPQUFTOztBQUUzRmQsc0JBQWNlLGFBQWQsQ0FBNEIsUUFBNUIsRUFBc0NWLElBQUlNLElBQUosQ0FBU0MsSUFBL0M7QUFDQU4sWUFBSVEsSUFBSixDQUFTLGtCQUFUO0FBQ0gsS0FMRDs7O0FBUUEsV0FBT2IsTUFBUDtBQUNILEMiLCJmaWxlIjoid2ViLmpzIiwic291cmNlUm9vdCI6IkU6L0Rldi9BZnRlclNoaXAvRXhjaGFuZ2VSYXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggICAgZnJvbSAncGF0aCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IHsgYXV0aG9yaXphdGlvbiB9IGZyb20gJy4uL21pZGRsZXdhcmUnO1xuXG5pbXBvcnQgUEFUSFMgZnJvbSAnLi4vLi4vY29uZmlnL3BhdGhzJztcblxuXG5leHBvcnQgZGVmYXVsdCAoYXBwLCBzZXJ2aWNlcywgZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgICBhcHAudXNlKHJvdXRlcik7XG5cbiAgICByb3V0ZXIuZ2V0KCcvJywgYXV0aG9yaXphdGlvbihzZXJ2aWNlcyksIChyZXEsIHJlcykgPT4ge1xuICAgICAgICByZXMuc2VuZEZpbGUocGF0aC5qb2luKFBBVEhTLmNsaWVudCwgJy9pbmRleC5odG1sJykpO1xuICAgIH0pO1xuXG4gICAgcm91dGVyLnBvc3QoJy9zaWdudXAnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgaWYoIXJlcS5ib2R5IHx8ICFyZXEuYm9keS51c2VyKSB7IHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIHVzZXIgcGFyYW1ldGVyJyk7IHJldHVybjsgfVxuXG4gICAgICAgIGV2ZW50TGlzdGVuZXIuY2FsbExpc3RlbmVycygnc2lnbnVwJywgcmVxLmJvZHkudXNlcik7XG4gICAgICAgIHJlcy5zZW5kKCdDaGVjayB5b3VyIG1haWxzJyk7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiByb3V0ZXI7XG59O1xuIl19

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _jwt = __webpack_require__(2);var _jwt2 = _interopRequireDefault(_jwt);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}exports.default =


function (services) {return function () {var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res, next) {var token, encryptedToken, newToken;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            token = req.body.token ||
                            req.query.token ||
                            (req.get('Authorization') || '').replace('Bearer ', '');if (!

                            token) {_context.next = 15;break;}_context.prev = 2;_context.next = 5;return (

                                _jwt2.default.verify(token));case 5:encryptedToken = _context.sent;
                            newToken = _jwt2.default.createToken(encryptedToken.data, '5d');

                            req.userToken = encryptedToken;
                            res.cookie('Authorization', newToken, {
                                expires: new Date(Date.now() + 900000),
                                httpOnly: false });_context.next = 15;break;case 11:_context.prev = 11;_context.t0 = _context['catch'](2);

                            res.status(401).send({ error: 'unauthorized' });return _context.abrupt('return');case 15:


                            next();case 16:case 'end':return _context.stop();}}}, _callee, undefined, [[2, 11]]);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcbWlkZGxld2FyZVxcYXV0aG9yaXphdGlvbi5qcyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJuZXh0IiwidG9rZW4iLCJib2R5IiwicXVlcnkiLCJnZXQiLCJyZXBsYWNlIiwidmVyaWZ5IiwiZW5jcnlwdGVkVG9rZW4iLCJuZXdUb2tlbiIsImNyZWF0ZVRva2VuIiwiZGF0YSIsInVzZXJUb2tlbiIsImNvb2tpZSIsImV4cGlyZXMiLCJEYXRlIiwibm93IiwiaHR0cE9ubHkiLCJzdGF0dXMiLCJzZW5kIiwiZXJyb3IiXSwibWFwcGluZ3MiOiIyRUFBQSw2Qjs7O0FBR2UsOEZBQVksaUJBQU9BLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakI7QUFDakJDLGlDQURpQixHQUNUSCxJQUFJSSxJQUFKLENBQVNELEtBQVQ7QUFDQUgsZ0NBQUlLLEtBQUosQ0FBVUYsS0FEVjtBQUVBLDZCQUFDSCxJQUFJTSxHQUFKLENBQVEsZUFBUixLQUE0QixFQUE3QixFQUFpQ0MsT0FBakMsQ0FBeUMsU0FBekMsRUFBb0QsRUFBcEQsQ0FIUzs7QUFLcEJKLGlDQUxvQjs7QUFPYyw4Q0FBSUssTUFBSixDQUFXTCxLQUFYLENBUGQsU0FPVE0sY0FQUztBQVFUQyxvQ0FSUyxHQVFFLGNBQUlDLFdBQUosQ0FBZ0JGLGVBQWVHLElBQS9CLEVBQXFDLElBQXJDLENBUkY7O0FBVWZaLGdDQUFJYSxTQUFKLEdBQWdCSixjQUFoQjtBQUNBUixnQ0FBSWEsTUFBSixDQUFXLGVBQVgsRUFBNEJKLFFBQTVCLEVBQXNDO0FBQ2xDSyx5Q0FBUyxJQUFJQyxJQUFKLENBQVNBLEtBQUtDLEdBQUwsS0FBYSxNQUF0QixDQUR5QjtBQUVsQ0MsMENBQVUsS0FGd0IsRUFBdEMsRUFYZTs7QUFlSGpCLGdDQUFJa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLEVBQUVDLE9BQU8sY0FBVCxFQUFyQixFQWZHOzs7QUFrQnZCbkIsbUNBbEJ1QiwrRUFBWiw2RSIsImZpbGUiOiJhdXRob3JpemF0aW9uLmpzIiwic291cmNlUm9vdCI6IkU6L0Rldi9BZnRlclNoaXAvRXhjaGFuZ2VSYXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICcuLi9qd3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VzID0+IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmJvZHkudG9rZW4gfHxcbiAgICAgICAgICAgICAgICAgIHJlcS5xdWVyeS50b2tlbiB8fFxuICAgICAgICAgICAgICAgICAgKHJlcS5nZXQoJ0F1dGhvcml6YXRpb24nKSB8fCAnJykucmVwbGFjZSgnQmVhcmVyICcsICcnKTtcblxuICAgIGlmKHRva2VuKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBlbmNyeXB0ZWRUb2tlbiA9IGF3YWl0IGp3dC52ZXJpZnkodG9rZW4pO1xuICAgICAgICAgICAgY29uc3QgbmV3VG9rZW4gPSBqd3QuY3JlYXRlVG9rZW4oZW5jcnlwdGVkVG9rZW4uZGF0YSwgJzVkJyk7XG5cbiAgICAgICAgICAgIHJlcS51c2VyVG9rZW4gPSBlbmNyeXB0ZWRUb2tlbjtcbiAgICAgICAgICAgIHJlcy5jb29raWUoJ0F1dGhvcml6YXRpb24nLCBuZXdUb2tlbiwge1xuICAgICAgICAgICAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyA5MDAwMDApLFxuICAgICAgICAgICAgICAgIGh0dHBPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHsgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBlcnJvcjogJ3VuYXV0aG9yaXplZCcgfSk7IHJldHVybjsgfVxuICAgIH1cblxuICAgIG5leHQoKTtcbn07XG4iXX0=

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _policies = __webpack_require__(23);exports.default =


function (services) {return function (req, res, next) {
        // trust x-forwarded only if own reverse proxy
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var rate = (services.memCache.getValue('connection_' + ip) || 0) + 1;
        var limit = req.userToken && _policies.authResuests || _policies.freeRequests;


        res.set('X-RateLimit-Limit', limit);
        res.set('X-RateLimit-Remaining', rate <= limit ? limit - rate : 0);

        if (rate > limit)
        {res.status(429).send('{ error: "rate limiting" }');return;}

        services.memCache.setValue('connection_' + ip, rate);

        next();
    };};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcbWlkZGxld2FyZVxccG9saWNpZXMuanMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibmV4dCIsImlwIiwiaGVhZGVycyIsImNvbm5lY3Rpb24iLCJyZW1vdGVBZGRyZXNzIiwicmF0ZSIsInNlcnZpY2VzIiwibWVtQ2FjaGUiLCJnZXRWYWx1ZSIsImxpbWl0IiwidXNlclRva2VuIiwic2V0Iiwic3RhdHVzIiwic2VuZCIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiMkVBQUEsdUM7OztBQUdlLDRCQUFZLFVBQUNBLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQzNDO0FBQ0EsWUFBTUMsS0FBUUgsSUFBSUksT0FBSixDQUFZLGlCQUFaLEtBQWtDSixJQUFJSyxVQUFKLENBQWVDLGFBQS9EO0FBQ0EsWUFBTUMsT0FBUSxDQUFDQyxTQUFTQyxRQUFULENBQWtCQyxRQUFsQixpQkFBeUNQLEVBQXpDLEtBQWtELENBQW5ELElBQXdELENBQXRFO0FBQ0EsWUFBTVEsUUFBU1gsSUFBSVksU0FBSiwwQkFBRCwwQkFBZDs7O0FBR0FYLFlBQUlZLEdBQUosQ0FBUSxtQkFBUixFQUFpQ0YsS0FBakM7QUFDQVYsWUFBSVksR0FBSixDQUFRLHVCQUFSLEVBQWlDTixRQUFRSSxLQUFSLEdBQWdCQSxRQUFRSixJQUF4QixHQUErQixDQUFoRTs7QUFFQSxZQUFHQSxPQUFPSSxLQUFWO0FBQ0EsU0FBRVYsSUFBSWEsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLDRCQUFyQixFQUFvRCxPQUFTOztBQUUvRFAsaUJBQVNDLFFBQVQsQ0FBa0JPLFFBQWxCLGlCQUF5Q2IsRUFBekMsRUFBK0NJLElBQS9DOztBQUVBTDtBQUNILEtBaEJjLEUiLCJmaWxlIjoicG9saWNpZXMuanMiLCJzb3VyY2VSb290IjoiRTovRGV2L0FmdGVyU2hpcC9FeGNoYW5nZVJhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcmVlUmVxdWVzdHMsIGF1dGhSZXN1ZXN0cyB9IGZyb20gJy4uL3BvbGljaWVzJztcblxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlcyA9PiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAvLyB0cnVzdCB4LWZvcndhcmRlZCBvbmx5IGlmIG93biByZXZlcnNlIHByb3h5XG4gICAgY29uc3QgaXAgICAgPSByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtZm9yJ10gfHwgcmVxLmNvbm5lY3Rpb24ucmVtb3RlQWRkcmVzcztcbiAgICBjb25zdCByYXRlICA9IChzZXJ2aWNlcy5tZW1DYWNoZS5nZXRWYWx1ZShgY29ubmVjdGlvbl8ke2lwfWApIHx8IDApICsgMTtcbiAgICBjb25zdCBsaW1pdCA9IChyZXEudXNlclRva2VuICYmIGF1dGhSZXN1ZXN0cykgfHwgZnJlZVJlcXVlc3RzO1xuXG5cbiAgICByZXMuc2V0KCdYLVJhdGVMaW1pdC1MaW1pdCcsICAgICBsaW1pdCk7XG4gICAgcmVzLnNldCgnWC1SYXRlTGltaXQtUmVtYWluaW5nJywgcmF0ZSA8PSBsaW1pdCA/IGxpbWl0IC0gcmF0ZSA6IDApO1xuXG4gICAgaWYocmF0ZSA+IGxpbWl0KVxuICAgIHsgcmVzLnN0YXR1cyg0MjkpLnNlbmQoJ3sgZXJyb3I6IFwicmF0ZSBsaW1pdGluZ1wiIH0nKTsgcmV0dXJuOyB9XG5cbiAgICBzZXJ2aWNlcy5tZW1DYWNoZS5zZXRWYWx1ZShgY29ubmVjdGlvbl8ke2lwfWAsIHJhdGUpO1xuXG4gICAgbmV4dCgpO1xufTtcbiJdfQ==

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.authResuests = exports.freeRequests = undefined;var _rateLimit = __webpack_require__(24);exports.


freeRequests = _rateLimit.freeRequests;exports.authResuests = _rateLimit.authResuests;exports.default =
[_rateLimit.freeRequests, _rateLimit.authResuests];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxccG9saWNpZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbImZyZWVSZXF1ZXN0cyIsImF1dGhSZXN1ZXN0cyJdLCJtYXBwaW5ncyI6Im1JQUFBLHdDOzs7QUFHaUJBLFksbUNBQWNDLFk7QUFDaEIsa0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovRGV2L0FmdGVyU2hpcC9FeGNoYW5nZVJhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcmVlUmVxdWVzdHMsIGF1dGhSZXN1ZXN0cyB9IGZyb20gJy4vcmF0ZUxpbWl0JztcblxuXG5leHBvcnQgICAgICAgICB7IGZyZWVSZXF1ZXN0cywgYXV0aFJlc3Vlc3RzIH07XG5leHBvcnQgZGVmYXVsdCBbIGZyZWVSZXF1ZXN0cywgYXV0aFJlc3Vlc3RzIF07XG4iXX0=

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var freeRequests = 10;
var authResuests = 30;exports.


freeRequests = freeRequests;exports.authResuests = authResuests;exports.default =
{ freeRequests: freeRequests, authResuests: authResuests };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxccG9saWNpZXNcXHJhdGVMaW1pdC5qcyJdLCJuYW1lcyI6WyJmcmVlUmVxdWVzdHMiLCJhdXRoUmVzdWVzdHMiXSwibWFwcGluZ3MiOiIyRUFBQSxJQUFNQSxlQUFlLEVBQXJCO0FBQ0EsSUFBTUMsZUFBZSxFQUFyQixDOzs7QUFHaUJELFksR0FBQUEsWSxTQUFjQyxZLEdBQUFBLFk7QUFDaEIsRUFBRUQsMEJBQUYsRUFBZ0JDLDBCQUFoQixFIiwiZmlsZSI6InJhdGVMaW1pdC5qcyIsInNvdXJjZVJvb3QiOiJFOi9EZXYvQWZ0ZXJTaGlwL0V4Y2hhbmdlUmF0ZSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZyZWVSZXF1ZXN0cyA9IDEwO1xuY29uc3QgYXV0aFJlc3Vlc3RzID0gMzA7XG5cblxuZXhwb3J0ICAgICAgICAgeyBmcmVlUmVxdWVzdHMsIGF1dGhSZXN1ZXN0cyB9O1xuZXhwb3J0IGRlZmF1bHQgeyBmcmVlUmVxdWVzdHMsIGF1dGhSZXN1ZXN0cyB9O1xuIl19

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _express = __webpack_require__(1);var _express2 = _interopRequireDefault(_express);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}exports.default =


function (app, services, eventListener) {
    var router = _express2.default.Router();

    app.use('/api', router);

    router.get('/currencies', function () {var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.t0 =
                            res;_context.next = 3;return eventListener.callListeners('getCurrencies', req.body);case 3:_context.t1 = _context.sent;_context.t0.send.call(_context.t0, _context.t1);case 5:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


    return router;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxccm91dGVzXFxwdWJsaWNBcGkuanMiXSwibmFtZXMiOlsiYXBwIiwic2VydmljZXMiLCJldmVudExpc3RlbmVyIiwicm91dGVyIiwiUm91dGVyIiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwiY2FsbExpc3RlbmVycyIsImJvZHkiLCJzZW5kIl0sIm1hcHBpbmdzIjoiMkVBQUEsa0M7OztBQUdlLFVBQUNBLEdBQUQsRUFBTUMsUUFBTixFQUFnQkMsYUFBaEIsRUFBa0M7QUFDN0MsUUFBTUMsU0FBUyxrQkFBUUMsTUFBUixFQUFmOztBQUVBSixRQUFJSyxHQUFKLENBQVEsTUFBUixFQUFnQkYsTUFBaEI7O0FBRUFBLFdBQU9HLEdBQVAsQ0FBVyxhQUFYLG9FQUEwQixpQkFBT0MsR0FBUCxFQUFZQyxHQUFaO0FBQ3RCQSwrQkFEc0IsMEJBQ1BOLGNBQWNPLGFBQWQsQ0FBNEIsZUFBNUIsRUFBNkNGLElBQUlHLElBQWpELENBRE8sZ0RBQ2xCQyxJQURrQixtR0FBMUI7OztBQUlBLFdBQU9SLE1BQVA7QUFDSCxDIiwiZmlsZSI6InB1YmxpY0FwaS5qcyIsInNvdXJjZVJvb3QiOiJFOi9EZXYvQWZ0ZXJTaGlwL0V4Y2hhbmdlUmF0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChhcHAsIHNlcnZpY2VzLCBldmVudExpc3RlbmVyKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuICAgIGFwcC51c2UoJy9hcGknLCByb3V0ZXIpO1xuXG4gICAgcm91dGVyLmdldCgnL2N1cnJlbmNpZXMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgICAgcmVzLnNlbmQoYXdhaXQgZXZlbnRMaXN0ZW5lci5jYWxsTGlzdGVuZXJzKCdnZXRDdXJyZW5jaWVzJywgcmVxLmJvZHkpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByb3V0ZXI7XG59O1xuIl19

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _express = __webpack_require__(1);var _express2 = _interopRequireDefault(_express);

var _middleware = __webpack_require__(6);var _middleware2 = _interopRequireDefault(_middleware);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}exports.default =


function (app, services, eventListener) {
    var router = _express2.default.Router();

    app.use('/api', _middleware2.default.map(function (mdw) {return mdw(services);}), router);

    router.get('/time-series', function () {var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(
                            !req.query.amount ||
                            !req.query.from ||
                            !req.query.to ||
                            !req.query.dateFrom ||
                            !req.query.dateTo)) {_context.next = 3;break;}res.status(400).send('Invalid query parameter');return _context.abrupt('return');case 3:_context.t0 =

                            res;_context.next = 6;return eventListener.callListeners('getTime-series', req.query);case 6:_context.t1 = _context.sent;_context.t0.send.call(_context.t0, _context.t1);case 8:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


    router.get('/exchange', function () {var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(
                            !req.query.amount ||
                            !req.query.from ||
                            !req.query.to)) {_context2.next = 3;break;}res.status(400).send('Invalid query parameter');return _context2.abrupt('return');case 3:_context2.t0 =

                            res;_context2.next = 6;return eventListener.callListeners('getExchange', req.query);case 6:_context2.t1 = _context2.sent;_context2.t0.send.call(_context2.t0, _context2.t1);case 8:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());


    return router;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxccm91dGVzXFxwcml2YXRlQXBpLmpzIl0sIm5hbWVzIjpbImFwcCIsInNlcnZpY2VzIiwiZXZlbnRMaXN0ZW5lciIsInJvdXRlciIsIlJvdXRlciIsInVzZSIsIm1hcCIsIm1kdyIsImdldCIsInJlcSIsInJlcyIsInF1ZXJ5IiwiYW1vdW50IiwiZnJvbSIsInRvIiwiZGF0ZUZyb20iLCJkYXRlVG8iLCJzdGF0dXMiLCJzZW5kIiwiY2FsbExpc3RlbmVycyJdLCJtYXBwaW5ncyI6IjJFQUFBLGtDOztBQUVBLDJDOzs7QUFHZSxVQUFDQSxHQUFELEVBQU1DLFFBQU4sRUFBZ0JDLGFBQWhCLEVBQWtDO0FBQzdDLFFBQU1DLFNBQVMsa0JBQVFDLE1BQVIsRUFBZjs7QUFFQUosUUFBSUssR0FBSixDQUFRLE1BQVIsRUFBZ0IscUJBQVdDLEdBQVgsQ0FBZSx1QkFBT0MsSUFBSU4sUUFBSixDQUFQLEVBQWYsQ0FBaEIsRUFBc0RFLE1BQXREOztBQUVBQSxXQUFPSyxHQUFQLENBQVcsY0FBWCxvRUFBMkIsaUJBQU9DLEdBQVAsRUFBWUMsR0FBWjtBQUNwQiw2QkFBQ0QsSUFBSUUsS0FBSixDQUFVQyxNQUFYO0FBQ0EsNkJBQUNILElBQUlFLEtBQUosQ0FBVUUsSUFEWDtBQUVBLDZCQUFDSixJQUFJRSxLQUFKLENBQVVHLEVBRlg7QUFHQSw2QkFBQ0wsSUFBSUUsS0FBSixDQUFVSSxRQUhYO0FBSUEsNkJBQUNOLElBQUlFLEtBQUosQ0FBVUssTUFMUyw2QkFLQ04sSUFBSU8sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLHlCQUFyQixFQUxEOztBQU92QlIsK0JBUHVCLDBCQU9SUixjQUFjaUIsYUFBZCxDQUE0QixnQkFBNUIsRUFBOENWLElBQUlFLEtBQWxELENBUFEsZ0RBT25CTyxJQVBtQixtR0FBM0I7OztBQVVBZixXQUFPSyxHQUFQLENBQVcsV0FBWCxxRUFBd0Isa0JBQU9DLEdBQVAsRUFBWUMsR0FBWjtBQUNqQiw2QkFBQ0QsSUFBSUUsS0FBSixDQUFVQyxNQUFYO0FBQ0EsNkJBQUNILElBQUlFLEtBQUosQ0FBVUUsSUFEWDtBQUVBLDZCQUFDSixJQUFJRSxLQUFKLENBQVVHLEVBSE0sOEJBR0FKLElBQUlPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQix5QkFBckIsRUFIQTs7QUFLcEJSLCtCQUxvQiwyQkFLTFIsY0FBY2lCLGFBQWQsQ0FBNEIsYUFBNUIsRUFBMkNWLElBQUlFLEtBQS9DLENBTEssbURBS2hCTyxJQUxnQix1R0FBeEI7OztBQVFBLFdBQU9mLE1BQVA7QUFDSCxDIiwiZmlsZSI6InByaXZhdGVBcGkuanMiLCJzb3VyY2VSb290IjoiRTovRGV2L0FmdGVyU2hpcC9FeGNoYW5nZVJhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vbWlkZGxld2FyZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGFwcCwgc2VydmljZXMsIGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4gICAgYXBwLnVzZSgnL2FwaScsIG1pZGRsZXdhcmUubWFwKG1kdyA9PiBtZHcoc2VydmljZXMpKSwgcm91dGVyKTtcblxuICAgIHJvdXRlci5nZXQoJy90aW1lLXNlcmllcycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBpZighcmVxLnF1ZXJ5LmFtb3VudCAgIHx8XG4gICAgICAgICAgICFyZXEucXVlcnkuZnJvbSAgICAgfHxcbiAgICAgICAgICAgIXJlcS5xdWVyeS50byAgICAgICB8fFxuICAgICAgICAgICAhcmVxLnF1ZXJ5LmRhdGVGcm9tIHx8XG4gICAgICAgICAgICFyZXEucXVlcnkuZGF0ZVRvKSB7IHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIHF1ZXJ5IHBhcmFtZXRlcicpOyByZXR1cm47IH1cblxuICAgICAgICByZXMuc2VuZChhd2FpdCBldmVudExpc3RlbmVyLmNhbGxMaXN0ZW5lcnMoJ2dldFRpbWUtc2VyaWVzJywgcmVxLnF1ZXJ5KSk7XG4gICAgfSk7XG5cbiAgICByb3V0ZXIuZ2V0KCcvZXhjaGFuZ2UnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgICAgaWYoIXJlcS5xdWVyeS5hbW91bnQgfHxcbiAgICAgICAgICAgIXJlcS5xdWVyeS5mcm9tICAgfHxcbiAgICAgICAgICAgIXJlcS5xdWVyeS50bykgeyByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBxdWVyeSBwYXJhbWV0ZXInKTsgcmV0dXJuOyB9XG5cbiAgICAgICAgcmVzLnNlbmQoYXdhaXQgZXZlbnRMaXN0ZW5lci5jYWxsTGlzdGVuZXJzKCdnZXRFeGNoYW5nZScsIHJlcS5xdWVyeSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJvdXRlcjtcbn07XG4iXX0=

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.mailHandler = exports.cacheHandler = exports.memCache = exports.request = exports.openExchange = undefined;var _request = __webpack_require__(28);var _request2 = _interopRequireDefault(_request);
var _mailHandler = __webpack_require__(29);var _mailHandler2 = _interopRequireDefault(_mailHandler);
var _openExchange = __webpack_require__(31);var _openExchange2 = _interopRequireDefault(_openExchange);
var _memCache = __webpack_require__(32);var _memCache2 = _interopRequireDefault(_memCache);
var _cacheHandler = __webpack_require__(33);var _cacheHandler2 = _interopRequireDefault(_cacheHandler);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var services = { request: _request2.default, mailHandler: _mailHandler2.default };
var openExchange = new _openExchange2.default(services);
var memCache = new _memCache2.default();
var cacheHandler = new _cacheHandler2.default(memCache, openExchange);


services.openExchange = openExchange;
services.memCache = memCache;
services.cacheHandler = cacheHandler;exports.


openExchange = openExchange;exports.request = _request2.default;exports.memCache = memCache;exports.cacheHandler = cacheHandler;exports.mailHandler = _mailHandler2.default;exports.default =
services;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcc2VydmljZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbInNlcnZpY2VzIiwicmVxdWVzdCIsIm1haWxIYW5kbGVyIiwib3BlbkV4Y2hhbmdlIiwibWVtQ2FjaGUiLCJjYWNoZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI4TEFBQSxvQztBQUNBLDRDO0FBQ0EsOEM7QUFDQSxzQztBQUNBLDhDOzs7QUFHQSxJQUFNQSxXQUFlLEVBQUVDLDBCQUFGLEVBQVdDLGtDQUFYLEVBQXJCO0FBQ0EsSUFBTUMsZUFBZSwyQkFBaUJILFFBQWpCLENBQXJCO0FBQ0EsSUFBTUksV0FBZSx3QkFBckI7QUFDQSxJQUFNQyxlQUFlLDJCQUFpQkQsUUFBakIsRUFBMkJELFlBQTNCLENBQXJCOzs7QUFHQUgsU0FBU0csWUFBVCxHQUF3QkEsWUFBeEI7QUFDQUgsU0FBU0ksUUFBVCxHQUF3QkEsUUFBeEI7QUFDQUosU0FBU0ssWUFBVCxHQUF3QkEsWUFBeEIsQzs7O0FBR1NGLFksR0FBQUEsWSxTQUFjRixPLDZCQUFTRyxRLEdBQUFBLFEsU0FBVUMsWSxHQUFBQSxZLFNBQWNILFc7QUFDekNGLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovRGV2L0FmdGVyU2hpcC9FeGNoYW5nZVJhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCAgICAgIGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgbWFpbEhhbmRsZXIgIGZyb20gJy4vbWFpbEhhbmRsZXInO1xuaW1wb3J0IE9wZW5FeGNoYW5nZSBmcm9tICcuL29wZW5FeGNoYW5nZSc7XG5pbXBvcnQgTWVtQ2FjaGUgICAgIGZyb20gJy4vbWVtQ2FjaGUnO1xuaW1wb3J0IENhY2hlSGFuZGxlciBmcm9tICcuL2NhY2hlSGFuZGxlcic7XG5cblxuY29uc3Qgc2VydmljZXMgICAgID0geyByZXF1ZXN0LCBtYWlsSGFuZGxlciB9O1xuY29uc3Qgb3BlbkV4Y2hhbmdlID0gbmV3IE9wZW5FeGNoYW5nZShzZXJ2aWNlcyk7XG5jb25zdCBtZW1DYWNoZSAgICAgPSBuZXcgTWVtQ2FjaGUoKTtcbmNvbnN0IGNhY2hlSGFuZGxlciA9IG5ldyBDYWNoZUhhbmRsZXIobWVtQ2FjaGUsIG9wZW5FeGNoYW5nZSk7XG5cblxuc2VydmljZXMub3BlbkV4Y2hhbmdlID0gb3BlbkV4Y2hhbmdlO1xuc2VydmljZXMubWVtQ2FjaGUgICAgID0gbWVtQ2FjaGU7XG5zZXJ2aWNlcy5jYWNoZUhhbmRsZXIgPSBjYWNoZUhhbmRsZXI7XG5cblxuZXhwb3J0IHsgb3BlbkV4Y2hhbmdlLCByZXF1ZXN0LCBtZW1DYWNoZSwgY2FjaGVIYW5kbGVyLCBtYWlsSGFuZGxlciB9O1xuZXhwb3J0IGRlZmF1bHQgc2VydmljZXM7XG4iXX0=

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =


function (
hostname,
path)
{var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { port: '80', method: 'GET' },_ref$port = _ref.port,port = _ref$port === undefined ? '80' : _ref$port,_ref$method = _ref.method,method = _ref$method === undefined ? 'GET' : _ref$method,query = _ref.query,args = _ref.args;
    return new Promise(function (resolve, reject) {
        var data = args ? JSON.stringify({ args: args }) : '';
        var options = {
            hostname: hostname,
            port: port,
            method: method,
            path: path + (query ? '?' + query.join('&').toString() : ''),
            headers: { 'Content-Length': Buffer.byteLength(data) } };

        var req = _http2.default.request(options, function (res) {
            var data = '';

            res.setEncoding('utf8');
            res.on('data', function (chunk) {data += chunk;});
            res.on('end', function () {
                try {resolve(JSON.parse(data));}
                catch (e) {reject(e);}
            });
        });

        req.on('error', function (e) {return reject(e);});
        req.write(data);
        req.end();
    });
};var _http = __webpack_require__(3);var _http2 = _interopRequireDefault(_http);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcc2VydmljZXNcXHJlcXVlc3QuanMiXSwibmFtZXMiOlsiaG9zdG5hbWUiLCJwYXRoIiwicG9ydCIsIm1ldGhvZCIsInF1ZXJ5IiwiYXJncyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcHRpb25zIiwiam9pbiIsInRvU3RyaW5nIiwiaGVhZGVycyIsIkJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJyZXEiLCJyZXF1ZXN0IiwicmVzIiwic2V0RW5jb2RpbmciLCJvbiIsImNodW5rIiwicGFyc2UiLCJlIiwid3JpdGUiLCJlbmQiXSwibWFwcGluZ3MiOiI7OztBQUdlO0FBQ1hBLFFBRFc7QUFFWEMsSUFGVztBQUdtRSxnRkFBL0IsRUFBRUMsTUFBTSxJQUFSLEVBQWNDLFFBQVEsS0FBdEIsRUFBK0Isa0JBQTVFRCxJQUE0RSxDQUE1RUEsSUFBNEUsNkJBQXJFLElBQXFFLGdDQUEvREMsTUFBK0QsQ0FBL0RBLE1BQStELCtCQUF0RCxLQUFzRCxlQUEvQ0MsS0FBK0MsUUFBL0NBLEtBQStDLENBQXhDQyxJQUF3QyxRQUF4Q0EsSUFBd0M7QUFDOUUsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLFlBQU1DLE9BQU9KLE9BQU9LLEtBQUtDLFNBQUwsQ0FBZSxFQUFFTixVQUFGLEVBQWYsQ0FBUCxHQUFrQyxFQUEvQztBQUNBLFlBQU1PLFVBQVU7QUFDWlosOEJBRFk7QUFFWkUsc0JBRlk7QUFHWkMsMEJBSFk7QUFJWkYsa0JBQU1BLFFBQVFHLFFBQVEsTUFBTUEsTUFBTVMsSUFBTixDQUFXLEdBQVgsRUFBZ0JDLFFBQWhCLEVBQWQsR0FBMkMsRUFBbkQsQ0FKTTtBQUtaQyxxQkFBUyxFQUFFLGtCQUFrQkMsT0FBT0MsVUFBUCxDQUFrQlIsSUFBbEIsQ0FBcEIsRUFMRyxFQUFoQjs7QUFPQSxZQUFNUyxNQUFNLGVBQUtDLE9BQUwsQ0FBYVAsT0FBYixFQUFzQixVQUFDUSxHQUFELEVBQVM7QUFDdkMsZ0JBQUlYLE9BQU8sRUFBWDs7QUFFQVcsZ0JBQUlDLFdBQUosQ0FBZ0IsTUFBaEI7QUFDQUQsZ0JBQUlFLEVBQUosQ0FBTyxNQUFQLEVBQWUsaUJBQVMsQ0FBRWIsUUFBUWMsS0FBUixDQUFnQixDQUExQztBQUNBSCxnQkFBSUUsRUFBSixDQUFPLEtBQVAsRUFBYyxZQUFNO0FBQ2hCLG9CQUFJLENBQUVmLFFBQVFHLEtBQUtjLEtBQUwsQ0FBV2YsSUFBWCxDQUFSLEVBQTRCO0FBQ2xDLHVCQUFPZ0IsQ0FBUCxFQUFVLENBQUVqQixPQUFPaUIsQ0FBUCxFQUFZO0FBQzNCLGFBSEQ7QUFJSCxTQVRXLENBQVo7O0FBV0FQLFlBQUlJLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFVBQUNHLENBQUQsVUFBT2pCLE9BQU9pQixDQUFQLENBQVAsRUFBaEI7QUFDQVAsWUFBSVEsS0FBSixDQUFVakIsSUFBVjtBQUNBUyxZQUFJUyxHQUFKO0FBQ0gsS0F2Qk0sQ0FBUDtBQXdCSCxDLENBL0JELDRCIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiRTovRGV2L0FmdGVyU2hpcC9FeGNoYW5nZVJhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tICdodHRwJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihcbiAgICBob3N0bmFtZSxcbiAgICBwYXRoLFxuICAgIHsgcG9ydCA9ICc4MCcsIG1ldGhvZCA9ICdHRVQnLCBxdWVyeSwgYXJncyB9ID0geyBwb3J0OiAnODAnLCBtZXRob2Q6ICdHRVQnIH0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXJncyA/IEpTT04uc3RyaW5naWZ5KHsgYXJncyB9KSA6ICcnO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgaG9zdG5hbWUsXG4gICAgICAgICAgICBwb3J0LFxuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgcGF0aDogcGF0aCArIChxdWVyeSA/ICc/JyArIHF1ZXJ5LmpvaW4oJyYnKS50b1N0cmluZygpIDogJycpLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1MZW5ndGgnOiBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSB9LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXEgPSBodHRwLnJlcXVlc3Qob3B0aW9ucywgKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSAnJztcblxuICAgICAgICAgICAgcmVzLnNldEVuY29kaW5nKCd1dGY4Jyk7XG4gICAgICAgICAgICByZXMub24oJ2RhdGEnLCBjaHVuayA9PiB7IGRhdGEgKz0gY2h1bms7IH0pO1xuICAgICAgICAgICAgcmVzLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHsgcmVzb2x2ZShKU09OLnBhcnNlKGRhdGEpKTsgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7IHJlamVjdChlKTsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcS5vbignZXJyb3InLCAoZSkgPT4gcmVqZWN0KGUpKTtcbiAgICAgICAgcmVxLndyaXRlKGRhdGEpO1xuICAgICAgICByZXEuZW5kKCk7XG4gICAgfSk7XG59XG4iXX0=

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _emailjs = __webpack_require__(30);var _emailjs2 = _interopRequireDefault(_emailjs);

var _keys = __webpack_require__(0);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var smtpServer = _emailjs2.default.server.connect(_keys.mailCredentials);
var mailHandler = {
    sendToken: function sendToken(host, tokenToSend, recipient) {
        smtpServer.send({
            text: 'Hello!\nAccess your account here: https://' +
            host.hostname + ':' + host.port + '/?token=' + tokenToSend,
            from: _keys.mailCredentials.user,
            to: recipient,
            subject: 'Login to Exchange Service' },
        function (err, message) {
            if (err) {console.error(err);}
        });
    } };exports.default =



mailHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcc2VydmljZXNcXG1haWxIYW5kbGVyLmpzIl0sIm5hbWVzIjpbInNtdHBTZXJ2ZXIiLCJzZXJ2ZXIiLCJjb25uZWN0IiwibWFpbEhhbmRsZXIiLCJzZW5kVG9rZW4iLCJob3N0IiwidG9rZW5Ub1NlbmQiLCJyZWNpcGllbnQiLCJzZW5kIiwidGV4dCIsImhvc3RuYW1lIiwicG9ydCIsImZyb20iLCJ1c2VyIiwidG8iLCJzdWJqZWN0IiwiZXJyIiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IjJFQUFBLGtDOztBQUVBLHlDOzs7QUFHQSxJQUFNQSxhQUFjLGtCQUFNQyxNQUFOLENBQWFDLE9BQWIsdUJBQXBCO0FBQ0EsSUFBTUMsY0FBYztBQUNoQkMsZUFBVyxtQkFBQ0MsSUFBRCxFQUFPQyxXQUFQLEVBQW9CQyxTQUFwQixFQUFrQztBQUN6Q1AsbUJBQVdRLElBQVgsQ0FBZ0I7QUFDWkMsa0JBQVM7QUFDUEosaUJBQUtLLFFBREUsR0FDUyxHQURULEdBQ2VMLEtBQUtNLElBRHBCLEdBQzJCLFVBRDNCLEdBQ3dDTCxXQUZyQztBQUdaTSxrQkFBUyxzQkFBZ0JDLElBSGI7QUFJWkMsZ0JBQVNQLFNBSkc7QUFLWlEscUJBQVMsMkJBTEcsRUFBaEI7QUFNRyxrQkFBU0MsR0FBVCxFQUFjQyxPQUFkLEVBQXVCO0FBQ3RCLGdCQUFHRCxHQUFILEVBQVEsQ0FBRUUsUUFBUUMsS0FBUixDQUFjSCxHQUFkLEVBQXFCO0FBQ2xDLFNBUkQ7QUFTSCxLQVhlLEVBQXBCLEM7Ozs7QUFlZWIsVyIsImZpbGUiOiJtYWlsSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJFOi9EZXYvQWZ0ZXJTaGlwL0V4Y2hhbmdlUmF0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbWFpbCBmcm9tICdlbWFpbGpzJztcblxuaW1wb3J0IHsgbWFpbENyZWRlbnRpYWxzIH0gZnJvbSAnLi4vLi4vY29uZmlnL2tleXMnO1xuXG5cbmNvbnN0IHNtdHBTZXJ2ZXIgID0gZW1haWwuc2VydmVyLmNvbm5lY3QobWFpbENyZWRlbnRpYWxzKTtcbmNvbnN0IG1haWxIYW5kbGVyID0ge1xuICAgIHNlbmRUb2tlbjogKGhvc3QsIHRva2VuVG9TZW5kLCByZWNpcGllbnQpID0+IHtcbiAgICAgICAgc210cFNlcnZlci5zZW5kKHtcbiAgICAgICAgICAgIHRleHQ6ICAgICdIZWxsbyFcXG5BY2Nlc3MgeW91ciBhY2NvdW50IGhlcmU6IGh0dHBzOi8vJ1xuICAgICAgICAgICAgKyBob3N0Lmhvc3RuYW1lICsgJzonICsgaG9zdC5wb3J0ICsgJy8/dG9rZW49JyArIHRva2VuVG9TZW5kLFxuICAgICAgICAgICAgZnJvbTogICAgbWFpbENyZWRlbnRpYWxzLnVzZXIsXG4gICAgICAgICAgICB0bzogICAgICByZWNpcGllbnQsXG4gICAgICAgICAgICBzdWJqZWN0OiAnTG9naW4gdG8gRXhjaGFuZ2UgU2VydmljZScsXG4gICAgICAgIH0sIGZ1bmN0aW9uKGVyciwgbWVzc2FnZSkge1xuICAgICAgICAgICAgaWYoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBtYWlsSGFuZGxlcjtcbiJdfQ==

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("emailjs");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =


function (services) {var _this = this;
    this.getCurrencies = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {var response;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                            services.request('openexchangerates.org', '/api/latest.json', {
                                query: ['app_id=' + _keys.exchangeRate] }));case 2:response = _context.sent;return _context.abrupt('return',


                        services.memCache.setValue('currencies', response));case 4:case 'end':return _context.stop();}}}, _callee, _this);}));


    this.getLatest = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {var response;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                            services.request('openexchangerates.org', '/api/latest.json', {
                                query: ['app_id=' + _keys.exchangeRate] }));case 2:response = _context2.sent;return _context2.abrupt('return',


                        services.memCache.setValue('exchange', response));case 4:case 'end':return _context2.stop();}}}, _callee2, _this);}));


    this.getHistorical = function () {var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(date) {var response;return regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (
                            date) {_context3.next = 2;break;}throw new Error('Invalid date parameter');case 2:_context3.next = 4;return (
                                services.request('openexchangerates.org', '/api/historical/' + date + '.json', {
                                    query: ['app_id=' + _keys.exchangeRate] }));case 4:response = _context3.sent;return _context3.abrupt('return',


                            services.memCache.setValue(date, response));case 6:case 'end':return _context3.stop();}}}, _callee3, _this);}));return function (_x) {return _ref3.apply(this, arguments);};}();

};var _keys = __webpack_require__(0);function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcc2VydmljZXNcXG9wZW5FeGNoYW5nZS5qcyJdLCJuYW1lcyI6WyJzZXJ2aWNlcyIsImdldEN1cnJlbmNpZXMiLCJyZXF1ZXN0IiwicXVlcnkiLCJyZXNwb25zZSIsIm1lbUNhY2hlIiwic2V0VmFsdWUiLCJnZXRMYXRlc3QiLCJnZXRIaXN0b3JpY2FsIiwiZGF0ZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7QUFHZSxVQUFTQSxRQUFULEVBQW1CO0FBQzlCLFNBQUtDLGFBQUwsNkNBQXFCO0FBQ01ELHFDQUFTRSxPQUFULENBQWlCLHVCQUFqQixFQUEwQyxrQkFBMUMsRUFBOEQ7QUFDakZDLHVDQUFPLGdDQUQwRSxFQUE5RCxDQUROLFNBQ1hDLFFBRFc7OztBQUtWSixpQ0FBU0ssUUFBVCxDQUFrQkMsUUFBbEIsQ0FBMkIsWUFBM0IsRUFBeUNGLFFBQXpDLENBTFUsaUVBQXJCOzs7QUFRQSxTQUFLRyxTQUFMLDZDQUFpQjtBQUNVUCxxQ0FBU0UsT0FBVCxDQUFpQix1QkFBakIsRUFBMEMsa0JBQTFDLEVBQThEO0FBQ2pGQyx1Q0FBTyxnQ0FEMEUsRUFBOUQsQ0FEVixTQUNQQyxRQURPOzs7QUFLTkosaUNBQVNLLFFBQVQsQ0FBa0JDLFFBQWxCLENBQTJCLFVBQTNCLEVBQXVDRixRQUF2QyxDQUxNLG1FQUFqQjs7O0FBUUEsU0FBS0ksYUFBTCxzRUFBcUIsa0JBQU9DLElBQVA7QUFDYkEsZ0NBRGEsbUNBQ0MsSUFBSUMsS0FBSixDQUFVLHdCQUFWLENBREQ7QUFFTVYseUNBQVNFLE9BQVQsQ0FBaUIsdUJBQWpCLHVCQUE2RE8sSUFBN0QsWUFBMEU7QUFDN0ZOLDJDQUFPLGdDQURzRixFQUExRSxDQUZOLFNBRVhDLFFBRlc7OztBQU1WSixxQ0FBU0ssUUFBVCxDQUFrQkMsUUFBbEIsQ0FBMkJHLElBQTNCLEVBQWlDTCxRQUFqQyxDQU5VLG1FQUFyQjs7QUFRSCxDLENBNUJELDRDIiwiZmlsZSI6Im9wZW5FeGNoYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJFOi9EZXYvQWZ0ZXJTaGlwL0V4Y2hhbmdlUmF0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4Y2hhbmdlUmF0ZSBhcyBhcGlLZXkgfSBmcm9tICcuLi8uLi9jb25maWcva2V5cy5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VydmljZXMpIHtcbiAgICB0aGlzLmdldEN1cnJlbmNpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VydmljZXMucmVxdWVzdCgnb3BlbmV4Y2hhbmdlcmF0ZXMub3JnJywgJy9hcGkvbGF0ZXN0Lmpzb24nLCB7XG4gICAgICAgICAgICBxdWVyeTogW2BhcHBfaWQ9JHthcGlLZXl9YF0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZXJ2aWNlcy5tZW1DYWNoZS5zZXRWYWx1ZSgnY3VycmVuY2llcycsIHJlc3BvbnNlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRMYXRlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VydmljZXMucmVxdWVzdCgnb3BlbmV4Y2hhbmdlcmF0ZXMub3JnJywgJy9hcGkvbGF0ZXN0Lmpzb24nLCB7XG4gICAgICAgICAgICBxdWVyeTogW2BhcHBfaWQ9JHthcGlLZXl9YF0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZXJ2aWNlcy5tZW1DYWNoZS5zZXRWYWx1ZSgnZXhjaGFuZ2UnLCByZXNwb25zZSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0SGlzdG9yaWNhbCA9IGFzeW5jIChkYXRlKSA9PiB7XG4gICAgICAgIGlmKCFkYXRlKSB7IHRocm93IG5ldyBFcnJvcignSW52YWxpZCBkYXRlIHBhcmFtZXRlcicpOyB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VydmljZXMucmVxdWVzdCgnb3BlbmV4Y2hhbmdlcmF0ZXMub3JnJywgYC9hcGkvaGlzdG9yaWNhbC8ke2RhdGV9Lmpzb25gLCB7XG4gICAgICAgICAgICBxdWVyeTogW2BhcHBfaWQ9JHthcGlLZXl9YF0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZXJ2aWNlcy5tZW1DYWNoZS5zZXRWYWx1ZShkYXRlLCByZXNwb25zZSk7XG4gICAgfTtcbn1cbiJdfQ==

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = function () {
    var store = {};

    this.setValue = function (key, value) {return store[key] = value;};
    this.getValue = function (key) {return store[key];};
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcc2VydmljZXNcXG1lbUNhY2hlLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwic2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsImdldFZhbHVlIl0sIm1hcHBpbmdzIjoiNkZBQWUsWUFBVztBQUN0QixRQUFNQSxRQUFRLEVBQWQ7O0FBRUEsU0FBS0MsUUFBTCxHQUFnQixVQUFDQyxHQUFELEVBQU1DLEtBQU4sVUFBZ0JILE1BQU1FLEdBQU4sSUFBYUMsS0FBN0IsRUFBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLHVCQUFPSixNQUFNRSxHQUFOLENBQVAsRUFBaEI7QUFDSCxDIiwiZmlsZSI6Im1lbUNhY2hlLmpzIiwic291cmNlUm9vdCI6IkU6L0Rldi9BZnRlclNoaXAvRXhjaGFuZ2VSYXRlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB7fTtcblxuICAgIHRoaXMuc2V0VmFsdWUgPSAoa2V5LCB2YWx1ZSkgPT4gc3RvcmVba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMuZ2V0VmFsdWUgPSBrZXkgPT4gc3RvcmVba2V5XTtcbn1cbiJdfQ==

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =
function (memCache, exchangeRequest) {var _this = this;
    this.getValue = function () {var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(key) {var cacheResult;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            cacheResult = memCache.getValue(key);if (!

                            cacheResult) {_context.next = 3;break;}return _context.abrupt('return', cacheResult);case 3:if (!(
                            key == 'currencies')) {_context.next = 7;break;}_context.next = 6;return exchangeRequest.getCurrencies();case 6:return _context.abrupt('return', _context.sent);case 7:if (!(
                            key == 'latest')) {_context.next = 11;break;}_context.next = 10;return exchangeRequest.getLatest();case 10:return _context.abrupt('return', _context.sent);case 11:if (!
                            key.match(/(\d{4})-(0[1-9]|1[0-2])-(\3([12]\d|0[1-9]|3[01])|[1-9]‌​)/)) {_context.next = 15;break;}_context.next = 14;return (
                                exchangeRequest.getHistorical(key));case 14:return _context.abrupt('return', _context.sent);case 15:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x) {return _ref.apply(this, arguments);};}();

};function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcc2VydmljZXNcXGNhY2hlSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJtZW1DYWNoZSIsImV4Y2hhbmdlUmVxdWVzdCIsImdldFZhbHVlIiwia2V5IiwiY2FjaGVSZXN1bHQiLCJnZXRDdXJyZW5jaWVzIiwiZ2V0TGF0ZXN0IiwibWF0Y2giLCJnZXRIaXN0b3JpY2FsIl0sIm1hcHBpbmdzIjoiO0FBQ2UsVUFBU0EsUUFBVCxFQUFtQkMsZUFBbkIsRUFBb0M7QUFDL0MsU0FBS0MsUUFBTCxxRUFBZ0IsaUJBQU1DLEdBQU47QUFDTkMsdUNBRE0sR0FDUUosU0FBU0UsUUFBVCxDQUFrQkMsR0FBbEIsQ0FEUjs7QUFHVEMsdUNBSFMsNkRBR21CQSxXQUhuQjtBQUlURCxtQ0FBTyxZQUpFLHNEQUkyQkYsZ0JBQWdCSSxhQUFoQixFQUozQjtBQUtURixtQ0FBTyxRQUxFLHdEQUt5QkYsZ0JBQWdCSyxTQUFoQixFQUx6QjtBQU1USCxnQ0FBSUksS0FBSixDQUFVLDJEQUFWLENBTlM7QUFPR04sZ0RBQWdCTyxhQUFoQixDQUE4QkwsR0FBOUIsQ0FQSCwwSEFBaEI7O0FBU0gsQyIsImZpbGUiOiJjYWNoZUhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiRTovRGV2L0FmdGVyU2hpcC9FeGNoYW5nZVJhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1lbUNhY2hlLCBleGNoYW5nZVJlcXVlc3QpIHtcbiAgICB0aGlzLmdldFZhbHVlID0gYXN5bmMga2V5ID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGVSZXN1bHQgPSBtZW1DYWNoZS5nZXRWYWx1ZShrZXkpO1xuXG4gICAgICAgIGlmKGNhY2hlUmVzdWx0ICAgICAgKSB7IHJldHVybiBjYWNoZVJlc3VsdDsgfVxuICAgICAgICBpZihrZXkgPT0gJ2N1cnJlbmNpZXMnKSB7IHJldHVybiBhd2FpdCBleGNoYW5nZVJlcXVlc3QuZ2V0Q3VycmVuY2llcygpOyB9XG4gICAgICAgIGlmKGtleSA9PSAnbGF0ZXN0JyAgKSB7IHJldHVybiBhd2FpdCBleGNoYW5nZVJlcXVlc3QuZ2V0TGF0ZXN0KCk7IH1cbiAgICAgICAgaWYoa2V5Lm1hdGNoKC8oXFxkezR9KS0oMFsxLTldfDFbMC0yXSktKFxcMyhbMTJdXFxkfDBbMS05XXwzWzAxXSl8WzEtOV3igIzigIspLykpXG4gICAgICAgIHsgcmV0dXJuIGF3YWl0IGV4Y2hhbmdlUmVxdWVzdC5nZXRIaXN0b3JpY2FsKGtleSk7IH1cbiAgICB9O1xufVxuIl19

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.dateToSteps = exports.exchange = undefined;var _exchange = __webpack_require__(35);var _exchange2 = _interopRequireDefault(_exchange);
var _dateToSteps = __webpack_require__(36);var _dateToSteps2 = _interopRequireDefault(_dateToSteps);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.


exchange = _exchange2.default;exports.dateToSteps = _dateToSteps2.default;exports.default =
{ exchange: _exchange2.default, dateToSteps: _dateToSteps2.default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcdHJhbnNmb3JtZXJcXGluZGV4LmpzIl0sIm5hbWVzIjpbImV4Y2hhbmdlIiwiZGF0ZVRvU3RlcHMiXSwibWFwcGluZ3MiOiI4SEFBQSxzQztBQUNBLDRDOzs7QUFHaUJBLFEsOEJBQVVDLFc7QUFDWixFQUFFRCw0QkFBRixFQUFZQyxrQ0FBWixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L0Rldi9BZnRlclNoaXAvRXhjaGFuZ2VSYXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4Y2hhbmdlICAgIGZyb20gJy4vZXhjaGFuZ2UnO1xuaW1wb3J0IGRhdGVUb1N0ZXBzIGZyb20gJy4vZGF0ZVRvU3RlcHMnO1xuXG5cbmV4cG9ydCAgICAgICAgIHsgZXhjaGFuZ2UsIGRhdGVUb1N0ZXBzIH07XG5leHBvcnQgZGVmYXVsdCB7IGV4Y2hhbmdlLCBkYXRlVG9TdGVwcyB9O1xuIl19

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = function (amount, from, to, _ref) {var rates = _ref.rates,timestamp = _ref.timestamp;
    if (!rates) {return;}

    var exchange = amount / rates[from] * rates[to];

    return { exchange: exchange, timestamp: timestamp };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcdHJhbnNmb3JtZXJcXGV4Y2hhbmdlLmpzIl0sIm5hbWVzIjpbImFtb3VudCIsImZyb20iLCJ0byIsInJhdGVzIiwidGltZXN0YW1wIiwiZXhjaGFuZ2UiXSwibWFwcGluZ3MiOiI2RkFBZSxVQUFDQSxNQUFELEVBQVNDLElBQVQsRUFBZUMsRUFBZixRQUE0QyxLQUF2QkMsS0FBdUIsUUFBdkJBLEtBQXVCLENBQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDdkQsUUFBRyxDQUFDRCxLQUFKLEVBQVcsQ0FBRSxPQUFTOztBQUV0QixRQUFNRSxXQUFXTCxTQUFTRyxNQUFNRixJQUFOLENBQVQsR0FBdUJFLE1BQU1ELEVBQU4sQ0FBeEM7O0FBRUEsV0FBTyxFQUFFRyxrQkFBRixFQUFZRCxvQkFBWixFQUFQO0FBQ0gsQyIsImZpbGUiOiJleGNoYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJFOi9EZXYvQWZ0ZXJTaGlwL0V4Y2hhbmdlUmF0ZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChhbW91bnQsIGZyb20sIHRvLCB7IHJhdGVzLCB0aW1lc3RhbXAgfSkgPT4ge1xuICAgIGlmKCFyYXRlcykgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IGV4Y2hhbmdlID0gYW1vdW50IC8gcmF0ZXNbZnJvbV0gKiByYXRlc1t0b107XG5cbiAgICByZXR1cm4geyBleGNoYW5nZSwgdGltZXN0YW1wIH07XG59O1xuIl19

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = function (dateFrom, dateTo) {var NUMBER_OF_STEPS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var start = new Date(dateFrom).valueOf();
    var end = new Date(dateTo).valueOf();

    var step = (start - end) / NUMBER_OF_STEPS;
    var interval = [];


    for (var i = 0; i < NUMBER_OF_STEPS; i++) {
        var date = start + step * i;
        interval.push(new Date(date).toISOString().split('T')[0]);
    }

    return interval;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlclxcdHJhbnNmb3JtZXJcXGRhdGVUb1N0ZXBzLmpzIl0sIm5hbWVzIjpbImRhdGVGcm9tIiwiZGF0ZVRvIiwiTlVNQkVSX09GX1NURVBTIiwic3RhcnQiLCJEYXRlIiwidmFsdWVPZiIsImVuZCIsInN0ZXAiLCJpbnRlcnZhbCIsImkiLCJkYXRlIiwicHVzaCIsInRvSVNPU3RyaW5nIiwic3BsaXQiXSwibWFwcGluZ3MiOiI2RkFBZSxVQUFDQSxRQUFELEVBQVdDLE1BQVgsRUFBNEMsS0FBekJDLGVBQXlCLHVFQUFQLEVBQU87QUFDdkQsUUFBTUMsUUFBUSxJQUFJQyxJQUFKLENBQVNKLFFBQVQsRUFBbUJLLE9BQW5CLEVBQWQ7QUFDQSxRQUFNQyxNQUFRLElBQUlGLElBQUosQ0FBU0gsTUFBVCxFQUFpQkksT0FBakIsRUFBZDs7QUFFQSxRQUFNRSxPQUFPLENBQUNKLFFBQVFHLEdBQVQsSUFBZ0JKLGVBQTdCO0FBQ0EsUUFBTU0sV0FBVyxFQUFqQjs7O0FBR0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlQLGVBQXBCLEVBQXFDTyxHQUFyQyxFQUEwQztBQUN0QyxZQUFNQyxPQUFPUCxRQUFTSSxPQUFPRSxDQUE3QjtBQUNBRCxpQkFBU0csSUFBVCxDQUFjLElBQUlQLElBQUosQ0FBU00sSUFBVCxFQUFlRSxXQUFmLEdBQTZCQyxLQUE3QixDQUFtQyxHQUFuQyxFQUF3QyxDQUF4QyxDQUFkO0FBQ0g7O0FBRUQsV0FBT0wsUUFBUDtBQUNILEMiLCJmaWxlIjoiZGF0ZVRvU3RlcHMuanMiLCJzb3VyY2VSb290IjoiRTovRGV2L0FmdGVyU2hpcC9FeGNoYW5nZVJhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoZGF0ZUZyb20sIGRhdGVUbywgTlVNQkVSX09GX1NURVBTID0gMTApID0+IHtcbiAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKGRhdGVGcm9tKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgZW5kICAgPSBuZXcgRGF0ZShkYXRlVG8pLnZhbHVlT2YoKTtcblxuICAgIGNvbnN0IHN0ZXAgPSAoc3RhcnQgLSBlbmQpIC8gTlVNQkVSX09GX1NURVBTO1xuICAgIGNvbnN0IGludGVydmFsID0gW107XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNQkVSX09GX1NURVBTOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHN0YXJ0ICsgKHN0ZXAgKiBpKTtcbiAgICAgICAgaW50ZXJ2YWwucHVzaChuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnZhbDtcbn07XG4iXX0=

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {
	"AED": "United Arab Emirates Dirham",
	"AFN": "Afghan Afghani",
	"ALL": "Albanian Lek",
	"AMD": "Armenian Dram",
	"ANG": "Netherlands Antillean Guilder",
	"AOA": "Angolan Kwanza",
	"ARS": "Argentine Peso",
	"AUD": "Australian Dollar",
	"AWG": "Aruban Florin",
	"AZN": "Azerbaijani Manat",
	"BAM": "Bosnia-Herzegovina Convertible Mark",
	"BBD": "Barbadian Dollar",
	"BDT": "Bangladeshi Taka",
	"BGN": "Bulgarian Lev",
	"BHD": "Bahraini Dinar",
	"BIF": "Burundian Franc",
	"BMD": "Bermudan Dollar",
	"BND": "Brunei Dollar",
	"BOB": "Bolivian Boliviano",
	"BRL": "Brazilian Real",
	"BSD": "Bahamian Dollar",
	"BTC": "Bitcoin",
	"BTN": "Bhutanese Ngultrum",
	"BWP": "Botswanan Pula",
	"BYN": "Belarusian Ruble",
	"BZD": "Belize Dollar",
	"CAD": "Canadian Dollar",
	"CDF": "Congolese Franc",
	"CHF": "Swiss Franc",
	"CLF": "Chilean Unit of Account (UF)",
	"CLP": "Chilean Peso",
	"CNH": "Chinese Yuan (Offshore)",
	"CNY": "Chinese Yuan",
	"COP": "Colombian Peso",
	"CRC": "Costa Rican Colón",
	"CUC": "Cuban Convertible Peso",
	"CUP": "Cuban Peso",
	"CVE": "Cape Verdean Escudo",
	"CZK": "Czech Republic Koruna",
	"DJF": "Djiboutian Franc",
	"DKK": "Danish Krone",
	"DOP": "Dominican Peso",
	"DZD": "Algerian Dinar",
	"EGP": "Egyptian Pound",
	"ERN": "Eritrean Nakfa",
	"ETB": "Ethiopian Birr",
	"EUR": "Euro",
	"FJD": "Fijian Dollar",
	"FKP": "Falkland Islands Pound",
	"GBP": "British Pound Sterling",
	"GEL": "Georgian Lari",
	"GGP": "Guernsey Pound",
	"GHS": "Ghanaian Cedi",
	"GIP": "Gibraltar Pound",
	"GMD": "Gambian Dalasi",
	"GNF": "Guinean Franc",
	"GTQ": "Guatemalan Quetzal",
	"GYD": "Guyanaese Dollar",
	"HKD": "Hong Kong Dollar",
	"HNL": "Honduran Lempira",
	"HRK": "Croatian Kuna",
	"HTG": "Haitian Gourde",
	"HUF": "Hungarian Forint",
	"IDR": "Indonesian Rupiah",
	"ILS": "Israeli New Sheqel",
	"IMP": "Manx pound",
	"INR": "Indian Rupee",
	"IQD": "Iraqi Dinar",
	"IRR": "Iranian Rial",
	"ISK": "Icelandic Króna",
	"JEP": "Jersey Pound",
	"JMD": "Jamaican Dollar",
	"JOD": "Jordanian Dinar",
	"JPY": "Japanese Yen",
	"KES": "Kenyan Shilling",
	"KGS": "Kyrgystani Som",
	"KHR": "Cambodian Riel",
	"KMF": "Comorian Franc",
	"KPW": "North Korean Won",
	"KRW": "South Korean Won",
	"KWD": "Kuwaiti Dinar",
	"KYD": "Cayman Islands Dollar",
	"KZT": "Kazakhstani Tenge",
	"LAK": "Laotian Kip",
	"LBP": "Lebanese Pound",
	"LKR": "Sri Lankan Rupee",
	"LRD": "Liberian Dollar",
	"LSL": "Lesotho Loti",
	"LYD": "Libyan Dinar",
	"MAD": "Moroccan Dirham",
	"MDL": "Moldovan Leu",
	"MGA": "Malagasy Ariary",
	"MKD": "Macedonian Denar",
	"MMK": "Myanma Kyat",
	"MNT": "Mongolian Tugrik",
	"MOP": "Macanese Pataca",
	"MRO": "Mauritanian Ouguiya",
	"MUR": "Mauritian Rupee",
	"MVR": "Maldivian Rufiyaa",
	"MWK": "Malawian Kwacha",
	"MXN": "Mexican Peso",
	"MYR": "Malaysian Ringgit",
	"MZN": "Mozambican Metical",
	"NAD": "Namibian Dollar",
	"NGN": "Nigerian Naira",
	"NIO": "Nicaraguan Córdoba",
	"NOK": "Norwegian Krone",
	"NPR": "Nepalese Rupee",
	"NZD": "New Zealand Dollar",
	"OMR": "Omani Rial",
	"PAB": "Panamanian Balboa",
	"PEN": "Peruvian Nuevo Sol",
	"PGK": "Papua New Guinean Kina",
	"PHP": "Philippine Peso",
	"PKR": "Pakistani Rupee",
	"PLN": "Polish Zloty",
	"PYG": "Paraguayan Guarani",
	"QAR": "Qatari Rial",
	"RON": "Romanian Leu",
	"RSD": "Serbian Dinar",
	"RUB": "Russian Ruble",
	"RWF": "Rwandan Franc",
	"SAR": "Saudi Riyal",
	"SBD": "Solomon Islands Dollar",
	"SCR": "Seychellois Rupee",
	"SDG": "Sudanese Pound",
	"SEK": "Swedish Krona",
	"SGD": "Singapore Dollar",
	"SHP": "Saint Helena Pound",
	"SLL": "Sierra Leonean Leone",
	"SOS": "Somali Shilling",
	"SRD": "Surinamese Dollar",
	"SSP": "South Sudanese Pound",
	"STD": "São Tomé and Príncipe Dobra",
	"SVC": "Salvadoran Colón",
	"SYP": "Syrian Pound",
	"SZL": "Swazi Lilangeni",
	"THB": "Thai Baht",
	"TJS": "Tajikistani Somoni",
	"TMT": "Turkmenistani Manat",
	"TND": "Tunisian Dinar",
	"TOP": "Tongan Pa'anga",
	"TRY": "Turkish Lira",
	"TTD": "Trinidad and Tobago Dollar",
	"TWD": "New Taiwan Dollar",
	"TZS": "Tanzanian Shilling",
	"UAH": "Ukrainian Hryvnia",
	"UGX": "Ugandan Shilling",
	"USD": "United States Dollar",
	"UYU": "Uruguayan Peso",
	"UZS": "Uzbekistan Som",
	"VEF": "Venezuelan Bolívar Fuerte",
	"VND": "Vietnamese Dong",
	"VUV": "Vanuatu Vatu",
	"WST": "Samoan Tala",
	"XAF": "CFA Franc BEAC",
	"XAG": "Silver Ounce",
	"XAU": "Gold Ounce",
	"XCD": "East Caribbean Dollar",
	"XDR": "Special Drawing Rights",
	"XOF": "CFA Franc BCEAO",
	"XPD": "Palladium Ounce",
	"XPF": "CFP Franc",
	"XPT": "Platinum Ounce",
	"YER": "Yemeni Rial",
	"ZAR": "South African Rand",
	"ZMW": "Zambian Kwacha",
	"ZWL": "Zimbabwean Dollar"
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
	"disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",
	"license": "https://openexchangerates.org/license",
	"timestamp": 1497891600,
	"base": "USD",
	"rates": {
		"AED": 3.67295,
		"AFN": 68.055,
		"ALL": 119.1,
		"AMD": 480.77,
		"ANG": 1.779149,
		"AOA": 165.9165,
		"ARS": 16.095,
		"AUD": 1.315838,
		"AWG": 1.794996,
		"AZN": 1.701025,
		"BAM": 1.744452,
		"BBD": 2,
		"BDT": 80.710863,
		"BGN": 1.75273,
		"BHD": 0.377106,
		"BIF": 1726,
		"BMD": 1,
		"BND": 1.382119,
		"BOB": 6.946709,
		"BRL": 3.2956,
		"BSD": 1,
		"BTC": 0.000383031505,
		"BTN": 64.41461,
		"BWP": 10.188965,
		"BYN": 1.890058,
		"BZD": 2.009091,
		"CAD": 1.321855,
		"CDF": 1450,
		"CHF": 0.974455,
		"CLF": 0.024562,
		"CLP": 661.5,
		"CNH": 6.828036,
		"CNY": 6.819245,
		"COP": 2975.37,
		"CRC": 569.235,
		"CUC": 1,
		"CUP": 25.5,
		"CVE": 98.95,
		"CZK": 23.47175,
		"DJF": 178.77,
		"DKK": 6.665218,
		"DOP": 47.47,
		"DZD": 108.454,
		"EGP": 17.9995,
		"ERN": 15.335,
		"ETB": 23.3,
		"EUR": 0.896145,
		"FJD": 2.047553,
		"FKP": 0.784665,
		"GBP": 0.784665,
		"GEL": 2.40874,
		"GGP": 0.784665,
		"GHS": 4.41,
		"GIP": 0.784665,
		"GMD": 45.855,
		"GNF": 8950,
		"GTQ": 7.340004,
		"GYD": 207.866724,
		"HKD": 7.800633,
		"HNL": 23.474682,
		"HRK": 6.646057,
		"HTG": 61.973727,
		"HUF": 275.994,
		"IDR": 13290.739736,
		"ILS": 3.528185,
		"IMP": 0.784665,
		"INR": 64.47,
		"IQD": 1182,
		"IRR": 32457.5,
		"ISK": 102.73,
		"JEP": 0.784665,
		"JMD": 129.661142,
		"JOD": 0.709001,
		"JPY": 111.42483333,
		"KES": 103.595,
		"KGS": 68.487499,
		"KHR": 4084,
		"KMF": 439.656281,
		"KPW": 899.91,
		"KRW": 1136.05,
		"KWD": 0.303613,
		"KYD": 0.832946,
		"KZT": 320.047741,
		"LAK": 8245,
		"LBP": 1514.55,
		"LKR": 152.977819,
		"LRD": 92.994573,
		"LSL": 12.818937,
		"LYD": 1.398162,
		"MAD": 9.786384,
		"MDL": 18.220009,
		"MGA": 3125,
		"MKD": 55.179158,
		"MMK": 1356.45,
		"MNT": 2357.333333,
		"MOP": 8.030348,
		"MRO": 362,
		"MUR": 34.735,
		"MVR": 15.595,
		"MWK": 730.5,
		"MXN": 17.969125,
		"MYR": 4.277527,
		"MZN": 59.5,
		"NAD": 12.805,
		"NGN": 326,
		"NIO": 29.88,
		"NOK": 8.484775,
		"NPR": 103.001513,
		"NZD": 1.38152,
		"OMR": 0.384993,
		"PAB": 1,
		"PEN": 3.273,
		"PGK": 3.289,
		"PHP": 50.045,
		"PKR": 104.85,
		"PLN": 3.776152,
		"PYG": 5579.85,
		"QAR": 3.66995,
		"RON": 4.118569,
		"RSD": 109.294916,
		"RUB": 58.3739,
		"RWF": 828.5,
		"SAR": 3.75025,
		"SBD": 7.841384,
		"SCR": 13.155068,
		"SDG": 6.69,
		"SEK": 8.739629,
		"SGD": 1.386407,
		"SHP": 0.784665,
		"SLL": 7460,
		"SOS": 588,
		"SRD": 7.5175,
		"SSP": 122.69715,
		"STD": 21740,
		"SVC": 8.745591,
		"SYP": 214.34,
		"SZL": 12.795,
		"THB": 33.944,
		"TJS": 8.813198,
		"TMT": 3.499986,
		"TND": 2.464098,
		"TOP": 2.266551,
		"TRY": 3.519869,
		"TTD": 6.726755,
		"TWD": 30.38,
		"TZS": 2236.95,
		"UAH": 26.013215,
		"UGX": 3583.35,
		"USD": 1,
		"UYU": 28.317428,
		"UZS": 3935,
		"VEF": 9.985022,
		"VND": 22708.833333,
		"VUV": 107.093419,
		"WST": 2.528851,
		"XAF": 587.258734,
		"XAG": 0.0603975,
		"XAU": 0.00080183,
		"XCD": 2.70255,
		"XDR": 0.723335,
		"XOF": 587.297395,
		"XPD": 0.00116156,
		"XPF": 107.2,
		"XPT": 0.00108049,
		"YER": 250.275,
		"ZAR": 12.991368,
		"ZMW": 9.190625,
		"ZWL": 322.387247
	}
};

/***/ })
/******/ ]);
//# sourceMappingURL=server.dev.js.map
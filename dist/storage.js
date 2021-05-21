'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAccessToken = exports.getTokenInternal = exports.logOut = exports.isAuthenticated = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var logOut = exports.logOut = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        localStorage.removeItem('authorization');

                        if (!useForage) {
                            _context.next = 4;
                            break;
                        }

                        _context.next = 4;
                        return _localforage2.default.removeItem('authorization');

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function logOut() {
        return _ref.apply(this, arguments);
    };
}();

var getTokenInternal = exports.getTokenInternal = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (!((typeof localStorage === 'undefined' ? 'undefined' : (0, _typeof3.default)(localStorage)) != undefined)) {
                            _context2.next = 3;
                            break;
                        }

                        if (!localStorage.authorization) {
                            _context2.next = 3;
                            break;
                        }

                        return _context2.abrupt('return', localStorage.authorization);

                    case 3:
                        return _context2.abrupt('return', null);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getTokenInternal() {
        return _ref2.apply(this, arguments);
    };
}();

var getAccessToken = exports.getAccessToken = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var token;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        token = getTokenInternal();

                        if (token) {
                            _context3.next = 11;
                            break;
                        }

                        _context3.prev = 2;
                        _context3.next = 5;
                        return _localforage2.default.getItem('authorization');

                    case 5:
                        token = _context3.sent;
                        _context3.next = 11;
                        break;

                    case 8:
                        _context3.prev = 8;
                        _context3.t0 = _context3['catch'](2);

                        useForage = false;

                    case 11:
                        if (!token) {
                            _context3.next = 16;
                            break;
                        }

                        exports.isAuthenticated = isAuthenticated = true;

                        if (!useForage) {
                            _context3.next = 16;
                            break;
                        }

                        _context3.next = 16;
                        return _localforage2.default.setItem('authorization', token);

                    case 16:
                        return _context3.abrupt('return', token);

                    case 17:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[2, 8]]);
    }));

    return function getAccessToken() {
        return _ref3.apply(this, arguments);
    };
}();

exports.setAccessToken = setAccessToken;

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAuthenticated = exports.isAuthenticated = false;
var useForage = true;

function setAccessToken(token) {
    localStorage.setItem('authorization', token);
    return getAccessToken();
}
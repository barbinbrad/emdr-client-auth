'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FACEBOOK_REDIRECT_LINK = exports.FACEBOOK_OAUTH_PARAMS = exports.FACEBOOK_REDIRECT_URI = exports.FACEBOOK_REDIRECT_PATH = exports.FACEBOOK_CLIENT_ID = exports.FACEBOOK_AUTH_ENDPOINT = exports.APPLE_REDIRECT_LINK = exports.APPLE_OAUTH_PARAMS = exports.APPLE_REDIRECT_URI = exports.APPLE_REDIRECT_PATH = exports.APPLE_CLIENT_ID = exports.APPLE_AUTH_ENDPOINT = exports.GOOGLE_REDIRECT_LINK = exports.GOOGLE_OAUTH_PARAMS = exports.GOOGLE_REDIRECT_URI = exports.GOOGLE_REDIRECT_PATH = exports.GOOGLE_URL_ROOT = exports.GOOGLE_AUTH_ENDPOINT = exports.GOOGLE_CLIENT_ID = undefined;

var _document = require('global/document');

var _document2 = _interopRequireDefault(_document);

var _querystringify = require('querystringify');

var _querystringify2 = _interopRequireDefault(_querystringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redirectOrigin = 'http://127.0.0.1';
if (_document2.default.location) {
  redirectOrigin = _document2.default.location.origin;
}

var GOOGLE_CLIENT_ID = exports.GOOGLE_CLIENT_ID = '898654513430-n8j6f8fdi0ib09ekvnr3d4fc0j85qaar.apps.googleusercontent.com';
var GOOGLE_AUTH_ENDPOINT = exports.GOOGLE_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/auth';
var GOOGLE_URL_ROOT = exports.GOOGLE_URL_ROOT = 'https://www.googleapis.com/';
var GOOGLE_REDIRECT_PATH = exports.GOOGLE_REDIRECT_PATH = '/auth/g/redirect';
var GOOGLE_REDIRECT_URI = exports.GOOGLE_REDIRECT_URI = redirectOrigin + GOOGLE_REDIRECT_PATH;
var GOOGLE_OAUTH_PARAMS = exports.GOOGLE_OAUTH_PARAMS = {
  type: 'web_server',
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: GOOGLE_REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  prompt: 'select_account'
};
var GOOGLE_REDIRECT_LINK = exports.GOOGLE_REDIRECT_LINK = [GOOGLE_AUTH_ENDPOINT, _querystringify2.default.stringify(GOOGLE_OAUTH_PARAMS)].join('?');

var APPLE_AUTH_ENDPOINT = exports.APPLE_AUTH_ENDPOINT = 'https://appleid.apple.com/auth/authorize';
var APPLE_CLIENT_ID = exports.APPLE_CLIENT_ID = 'app.eyemovement.web';
var APPLE_REDIRECT_PATH = exports.APPLE_REDIRECT_PATH = '/auth/a/redirect';
var APPLE_REDIRECT_URI = exports.APPLE_REDIRECT_URI = 'https://eyemovement.app' + APPLE_REDIRECT_PATH;
var APPLE_OAUTH_PARAMS = exports.APPLE_OAUTH_PARAMS = {
  client_id: APPLE_CLIENT_ID,
  redirect_uri: APPLE_REDIRECT_URI,
  response_type: 'code',
  response_mode: 'form_post',
  scope: 'name email'
};
var APPLE_REDIRECT_LINK = exports.APPLE_REDIRECT_LINK = [APPLE_AUTH_ENDPOINT, _querystringify2.default.stringify(APPLE_OAUTH_PARAMS)].join('?');

var FACEBOOK_AUTH_ENDPOINT = exports.FACEBOOK_AUTH_ENDPOINT = 'https://www.facebook.com/v10.0/dialog/oauth';
var FACEBOOK_CLIENT_ID = exports.FACEBOOK_CLIENT_ID = '272276201311217';
var FACEBOOK_REDIRECT_PATH = exports.FACEBOOK_REDIRECT_PATH = '/auth/f/redirect';
var FACEBOOK_REDIRECT_URI = exports.FACEBOOK_REDIRECT_URI = redirectOrigin + FACEBOOK_REDIRECT_PATH;
var FACEBOOK_OAUTH_PARAMS = exports.FACEBOOK_OAUTH_PARAMS = {
  client_id: FACEBOOK_CLIENT_ID,
  redirect_uri: FACEBOOK_REDIRECT_URI,
  response_type: 'code',
  scope: 'email'
};
var FACEBOOK_REDIRECT_LINK = exports.FACEBOOK_REDIRECT_LINK = [FACEBOOK_AUTH_ENDPOINT, _querystringify2.default.stringify(FACEBOOK_OAUTH_PARAMS)].join('?');
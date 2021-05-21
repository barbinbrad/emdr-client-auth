import document from 'global/document';
import qs from 'querystringify';

var redirectOrigin = 'http://127.0.0.1';
if (document.location) {
  redirectOrigin = document.location.origin;
}

export const GOOGLE_CLIENT_ID = 'XXXXXX';
export const GOOGLE_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/auth';
export const GOOGLE_URL_ROOT = 'https://www.googleapis.com/';
export const GOOGLE_REDIRECT_PATH = '/auth/g/redirect';
export const GOOGLE_REDIRECT_URI = redirectOrigin + GOOGLE_REDIRECT_PATH;
export const GOOGLE_OAUTH_PARAMS = {
  type: 'web_server',
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: GOOGLE_REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  prompt: 'select_account',
};
export const GOOGLE_REDIRECT_LINK = [GOOGLE_AUTH_ENDPOINT, qs.stringify(GOOGLE_OAUTH_PARAMS)].join('?')

export const APPLE_AUTH_ENDPOINT = 'https://appleid.apple.com/auth/authorize';
export const APPLE_CLIENT_ID = 'XXXXXX';
export const APPLE_REDIRECT_PATH = '/auth/a/redirect';
export const APPLE_REDIRECT_URI = redirectOrigin + APPLE_REDIRECT_PATH;
export const APPLE_OAUTH_PARAMS = {
  client_id : APPLE_CLIENT_ID,
  redirect_uri: APPLE_REDIRECT_URI,
  response_type: 'code',
  response_mode: 'form_post',
  scope: 'name email',
};
export const APPLE_REDIRECT_LINK = [APPLE_AUTH_ENDPOINT, qs.stringify(APPLE_OAUTH_PARAMS)].join('?')


export const FACEBOOK_AUTH_ENDPOINT = '';
export const FACEBOOK_CLIENT_ID = 'XXXXXX';
export const FACEBOOK_REDIRECT_PATH = '/auth/f/redirect';
export const FACEBOOK_REDIRECT_URI = redirectOrigin + FACEBOOK_REDIRECT_PATH;
export const FACEBOOK_OATH_PARAMS = {
    client_id: FACEBOOK_CLIENT_ID,
    redirect_uri: FACEBOOK_REDIRECT_URI,
    response_type: 'code',
    scope: 'email',
};
export const FACEBOOK_REDIRECT_LINK = [FACEBOOK_AUTH_ENDPOINT, qs.stringify(FACEBOOK_OAUTH_PARAMS)].join('?');
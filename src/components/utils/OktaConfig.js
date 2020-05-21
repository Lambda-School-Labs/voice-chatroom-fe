const OKTA_DOMAIN = process.env.REACT_APP_OKTA_DOMAIN;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CALLBACK_PATH = '/implicit/callback';

const ISSUER = `${OKTA_DOMAIN}/oauth2/default`;
const HOST = window.location.host;
const REDIRECT_URI = `https://${HOST}${CALLBACK_PATH}`;
console.log(HOST)
const SCOPES = ['openid', 'profile', 'email'];

export default {
    issuer: ISSUER,
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI,
    scope: SCOPES,
    callbackPath: CALLBACK_PATH,
};
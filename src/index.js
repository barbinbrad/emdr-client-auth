import document from 'global/document';

import * as storage from './storage';
import * as config from './config';

export { storage, config };

async function init() {
    const token = await storage.getAccessToken();
    return token;
}

async function logOut() {
    await storage.logOut();
    document.location.href = document.location.origin;
}

function isAuthenticated() {
    return storage.isAuthenticated;
}

export default { init, logOut, isAuthenticated };
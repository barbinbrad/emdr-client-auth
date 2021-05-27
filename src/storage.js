import storage from 'localforage';

export let isAuthenticated = false;
let useForage = true;

export async function logOut() {
    localStorage.removeItem('authorization');
    if (useForage) {
        await storage.removeItem('authorization');
    }
}

export function getTokenInternal() {
    if (typeof localStorage != undefined) {
        if (localStorage.authorization) {
            return localStorage.authorization;
        }
    }
    return null;
}

export function setAccessToken(token) {
    localStorage.setItem('authorization', token);
    return getAccessToken();
}

export async function getAccessToken() {
    let token = getTokenInternal();
    if (!token) {
        try {
            token = await storage.getItem('authorization');
        } catch (e) {
            useForage = false;
        }
    }

    if (token) {
        console.log('Token is : ' + token);
        isAuthenticated = true;
        if (useForage) {
            await storage.setItem('authorization', token);
    }
  }

  return token;

}
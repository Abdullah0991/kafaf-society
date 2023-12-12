import { AuthProvider } from 'react-admin';

const SS_KEY = 'adbkf';
const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER;
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS;

export const adminAuthProvider: AuthProvider = {
    login: ({ username, password }) => {
        if (username !== ADMIN_USER || password !== ADMIN_PASS) {
            return Promise.reject();
        }
        sessionStorage.setItem(SS_KEY, btoa(`${username}:${password}`));
        return Promise.resolve();
    },
    logout: () => {
        sessionStorage.removeItem(SS_KEY);
        return Promise.resolve();
    },
    checkAuth: () => {
        const auth = sessionStorage.getItem(SS_KEY);
        if (auth) {
            const checkAuth = atob(auth).split(':');
            if (checkAuth.length === 2 && (checkAuth[0] === ADMIN_USER && checkAuth[1] === ADMIN_PASS)) {
                return Promise.resolve();
            }
        }
        return Promise.reject();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            sessionStorage.removeItem(SS_KEY);
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user2',
            fullName: 'Admin',
        }),
    getPermissions: () => Promise.resolve(''),
};
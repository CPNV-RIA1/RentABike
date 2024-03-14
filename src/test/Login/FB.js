"use strict";

module.exports = class FB {
    constructor() {
        this.isLoggedIn = false;
    }
    login(callback) {
        this.isLoggedIn = true;
        return { status: 'connected', authResponse: { accessToken: 'mockAccessToken' } };
    }

    loginFailure(callback) {
        this.isLoggedIn = false;
        return { status: 'unknown' };
    }

    loginNotAuthorized(callback) {
        this.isLoggedIn = false;
        return { status: 'not_authorized' };
    }

    logout(callback) {
        this.isLoggedIn = false;
    }

    getLoginStatus(callback) {
        return { status: 'connected', authResponse: { accessToken: 'mockAccessToken' } };
    }
}
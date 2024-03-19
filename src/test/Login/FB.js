"use strict";

module.exports = class FB {
    constructor() {
        this.isLoggedIn = false;
    }
    login(callback) {
        this.isLoggedIn = true;
        return { status: 'connected', authResponse: { accessToken: 'mockAccessToken' } };
    }

    logout(callback) {
        this.isLoggedIn = false;
    }

    getLoginStatus(callback) {
        return this.isLoggedIn ? { status: 'connected', authResponse: { accessToken: 'mockAccessToken', expiresIn: '{unix-timestamp}', reauthorize_required_in: '{seconds-until-token-expires}', signedRequest: '{signed-parameter}', userID: '{user-id}' } } : { status: 'unknown' };
    }
}
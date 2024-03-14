"use strict";
const FB = require('../test/Login/FB');
const UndefinedLoginException = require('./UndefinedLoginException');

module.exports = class Login {
    constructor(loginRequest = new UndefinedLoginException()) {
        this.isLoggedIn = false;
        this.login(loginRequest);
    }
    login(loginRequest = new UndefinedLoginException()) {
        if (loginRequest.status === 'connected' && loginRequest.authResponse.accessToken !== undefined) {
            this.isLoggedIn = true;
            return true;
        }
        else {
            this.isLoggedIn = false;
            return false;
        }
    }
    logout() {
    }
    getLoginStatus() {
    }
}
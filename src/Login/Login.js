"use strict";
const FB = require('../test/Login/FB');
const UndefinedLoginException = require('./UndefinedLoginException');

module.exports = class Login {
    constructor(loginRequest) {
        this.isLoggedIn = false;
        this.login(loginRequest);
    }
    login(loginRequest) {
        try {
            loginRequest.login();
            this.isLoggedIn = true;
        }
        catch (e) {
            this.isLoggedIn = false;
        }
    }
    logout() {
        throw new UndefinedLoginException('logout method not implemented');
    }
    getLoginStatus() {
        throw new UndefinedLoginException('getLoginStatus method not implemented');
    }
}
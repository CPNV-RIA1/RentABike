"use strict";
const FB = require('../test/Login/FB');
const UndefinedLoginException = require('./UndefinedLoginException');

module.exports = class Login {
    constructor() {
    }
    login() {
        throw new UndefinedLoginException('Login method not implemented');
    }
    isLoggedIn() {
        throw new UndefinedLoginException('isLoggedIn method not implemented');
    }
    logout() {
        throw new UndefinedLoginException('logout method not implemented');
    }
    getLoginStatus() {
        throw new UndefinedLoginException('getLoginStatus method not implemented');
    }
}
"use strict";
const FB = require('../test/Login/FB');
const UndefinedLoginException = require('./UndefinedLoginException');
const UnknowLoginException = require('./UnknownLoginException');
const UnauthorizedLoginException = require('./UnauthorizedLoginException');
module.exports = class Login {
    isLoggedIn;
    constructor() {
    }
    login(loginRequest = new UndefinedLoginException()) {
        switch (loginRequest.status) {
            case 'connected':
                if (loginRequest.authResponse.accessToken !== undefined) {
                    return true;
                }
                else {
                    throw new UndefinedLoginException();
                }
                break;
            case 'not_authorized':
                throw new UnauthorizedLoginException();
                break;
            case 'unknown':
                throw new UnknowLoginException();
                break;
            default:
                throw new UndefinedLoginException();
                break;
        }
    }
    logout() {
    }
    getLoginStatus(loginStatus = new UndefinedLoginException()) {
        if (loginStatus.status === 'connected') {
            if (loginStatus.authResponse.accessToken !== undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}
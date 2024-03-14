//initiate facebook sdk login service
const { before } = require('node:test');
const Login = require('../Login/login');
const FB = require('./Login/FB');
const UnauthorizedLoginException = require('../Login/UnauthorizedLoginException');
const UnknownLoginException = require('../Login/UnknownLoginException');
const UndefinedLoginException = require('../Login/UndefinedLoginException');

beforeAll(() => {
    global.FB = new FB();
})

test('is_user_logged_in_success', () => {
    //given
    let login = new Login();
    login.login(global.FB.login());
    //when
    let status = login.getLoginStatus(global.FB.getLoginStatus());
    //then
    expect(status).toBe(true);

})
test('is_user_logged_in_failure', () => {
    //given
    let login = new Login();
    //when
    let status = login.getLoginStatus();
    //then
    expect(status).toBe(false);
})
test('log_user_in_success', () => {
    //given
    let login = new Login();
    //when
    login.login(global.FB.login());
    //then
    expect(login.getLoginStatus(global.FB.getLoginStatus())).toBe(true);
})
test('log_user_in_not_authorized', () => {
    //given
    let login = new Login();
    //when

    //then
    expect(() => {
        login.login(global.FB.loginNotAuthorized());
    }).toThrowError(UnauthorizedLoginException);

})
test('log_user_in_unknown', () => {
    //given
    let login = new Login();
    //when

    //then
    expect(() => {
        login.login(global.FB.loginFailure());
    }).toThrowError(UnknownLoginException);
})
test('log_user_out_success', () => {
    //given
    let login = new Login(global.FB.login());
    //when
    login.login();
    login.logout();
    //then
    expect(login.getLoginStatus(global.FB.getLoginStatus())).toBe(false);
})



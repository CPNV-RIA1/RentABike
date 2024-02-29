//initiate facebook sdk login service
const { before } = require('node:test');
const Login = require('../Login/login');
const FB = require('./Login/FB');

beforeAll(() => {
    global.FB = new FB();
})

test('is_user_logged_in', () => {
    //given
    let login = new Login(FB.login());
    //when
    let status = login.isLoggedIn();
    //then
    expect(status).toBe(true);

})
test('log_user_in', () => {
    //given
    let login = new Login(FB.login());
    //when
    login.login();
    //then
    expect(login.isLoggedIn()).toBe(true);
})

test('log_user_out', () => {
    //given
    let login = new Login(FB.login());
    //when
    login.login();
    login.logout();
    //then
    expect(login.isLoggedIn()).toBe(false);
})
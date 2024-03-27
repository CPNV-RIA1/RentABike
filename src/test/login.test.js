/**
 * @jest-environment jsdom
 */

//initiate facebook sdk login service
const { before } = require('node:test');
import Login from '../Login/login'; // Importing the default export
const FB = require('./Login/FB');
import UnauthorizedLoginException from '../Login/UnauthorizedLoginException';
import UnknownLoginException from '../Login/UnknownLoginException';
import UndefinedLoginException from '../Login/UndefinedLoginException';

beforeAll(() => {
    global.FB = new FB();
    delete window.location;
    window.location = { reload: jest.fn() };
})
afterAll(() => {
    window.location = location;
})

test('user_logged_in_success', () => {
    //given
    console.log(window.location.href);
    let login = new Login();
    document.body.innerHTML =
        '<a id="falogin" class="btn-face m-b-20">' +
        '<i class="fa fa-facebook-official"></i>' +
        'Facebook' +
        '</a>';

    const falogin = document.getElementById('falogin');
    falogin.addEventListener('click', () => {
        login.login(global.FB.login());
    });
    //when
    falogin.click();
    let status = login.getLoginStatus(global.FB.getLoginStatus());
    //then
    expect(status).toBe(true);
    expect(window.location.href).toBe('../../public_html/index.html');
})
test('user_logged_in_failure', () => {
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
    console.log(window.location.href);
    let login = new Login();
    document.body.innerHTML =
        '<a id="falogout" class="btn-face m-b-20">' +
        '<i class="fa fa-facebook-official"></i>' +
        'Déconexion' +
        '</a>';
    const falogout = document.getElementById('falogout');
    falogout.addEventListener('click', () => {
        login.logout();
    });
    //when
    falogout.click();
    //then
    expect(login.getLoginStatus()).toBe(false);
    expect(window.location.href).toBe('../../public_html/index.html');
})



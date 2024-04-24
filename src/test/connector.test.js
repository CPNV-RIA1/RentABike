/**
 * @jest-environment jsdom
 */

const { before } = require('node:test');
import Connector from '../Login/login'; // Importing the default export
const FB = require('./Login/FB');

describe('Login Service', () => {
    let connector;
    beforeAll(() => {
        global.FB = new FB();
        delete window.location;
        window.location = { reload: jest.fn() };
    });

    afterAll(() => {
        window.location = location;
    });
    beforeEach(() => {
        connector = new Connector();
    });

    it('should log in a user successfully', () => {
        document.body.innerHTML =
            '<a id="falogin" class="btn-face m-b-20">' +
            '<i class="fa fa-facebook-official"></i>' +
            'Facebook' +
            '</a>';

        const falogin = document.getElementById('falogin');
        falogin.addEventListener('click', () => {
            connector.login(global.FB.login());
        });
        //when
        falogin.click();
        let status = connector.getLoginStatus(global.FB.getLoginStatus());
        //then
        expect(status).toBe(true);
        expect(window.location.href).toBe('../../public_html/index.html');
    });
    it('should log in a user unsuccessfully', () => {
        // Given
        document.body.innerHTML =
            '<a id="falogin" class="btn-face m-b-20">' +
            '<i class="fa fa-facebook-official"></i>' +
            'Facebook' +
            '</a>';

        const falogin = document.getElementById('falogin');
        falogin.addEventListener('click', () => {
            connector.login(global.FB.login());
        });
        //when
        falogin.click();
        let status = connector.getLoginStatus(global.FB.getLoginStatus());
        //then
        expect(status).toBe(false);
        expect(window.location.href).toBe('../../public_html/form.html');
    });

});

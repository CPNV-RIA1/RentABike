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
});

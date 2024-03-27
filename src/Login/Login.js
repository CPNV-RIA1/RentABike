import UndefinedLoginException from './UndefinedLoginException.js';
import UnknowLoginException from './UnknownLoginException.js';
import UnauthorizedLoginException from './UnauthorizedLoginException.js';
const falogin = document.getElementById('falogin');
falogin.addEventListener('click', () => {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '459552226638679',
            xfbml: true,
            version: 'v19.0'
        });
    };

    console.log(window.fbAsyncInit);

    console.log(FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    }));
    var login = new Login();
    //login.login();
});
export default class Login {
    isLoggedIn = false;
    constructor() {
    }
    login(loginRequest = new UndefinedLoginException()) {
        switch (loginRequest.status) {
            case 'connected':
                if (loginRequest.authResponse.accessToken !== undefined) {
                    this.isLoggedIn = true;
                    window.location.href = '../../public_html/index.html';
                }
                else {
                    window.location.href = '../../public_html/form.html';
                    throw new UndefinedLoginException();
                }
                break;
            case 'not_authorized':
                window.location.href = '../../public_html/form.html';
                throw new UnauthorizedLoginException();
                break;
            case 'unknown':
                window.location.href = '../../public_html/form.html';
                throw new UnknowLoginException();
                break;
            default:
                window.location.href = '../../public_html/form.html';
                throw new UndefinedLoginException();
                break;
        }
    }
    logout() {
        this.isLoggedIn = false;
        window.location.href = '../../public_html/index.html';
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

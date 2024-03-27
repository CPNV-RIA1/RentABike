import UndefinedLoginException from './UndefinedLoginException.js';
import UnknowLoginException from './UnknownLoginException.js';
import UnauthorizedLoginException from './UnauthorizedLoginException.js';
const falogin = document.getElementById('falogin');
falogin.addEventListener('click', async () => {
    var login = new Login();
    await FB.login(function (response) {
        if (response.authResponse) {
            console.log(response);
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', { fields: 'name, email' }, function (response) {
                document.getElementById("falogin").innerHTML = "Good to see you, " + response.name + ". i see your email address is " + response.email
            });
            login.login(response);
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });

    console.log(response);
    //login.login();
});
export default class Login {
    isLoggedIn = false;
    constructor() {
    }
    login(loginRequest = new UndefinedLoginException()) {
        console.log(loginRequest);
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

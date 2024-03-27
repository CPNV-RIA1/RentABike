import Login from "./Login.js";
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
});
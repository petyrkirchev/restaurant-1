    window.fbAsyncInit = function () {
        FB.init({
            appId: '187620591743427',
            xfbml: true,
            version: 'v2.8'
        });
        FB.AppEvents.logPageView();
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                document.getElementById('status').innerHTML= 'We are connecter';
            } else if(response.status === 'not_authorized'){
                document.getElementById('status').innerHTML= 'We are not logged in.';
            }else {
                document.getElementById('status').innerHTML= 'You are not logged into Facebook.';
            }
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    // .......................................

    function loginFB() {

        FB.login(function (response) {
           if (response.status === 'connected') {
                document.getElementById('status').innerHTML= 'We are connecter';
            } else if(response.status === 'not_authorized'){
                document.getElementById('status').innerHTML= 'We are not logged in.';
            }else {
                document.getElementById('status').innerHTML= 'You are not logged into Facebook.';
            }
        });
    }
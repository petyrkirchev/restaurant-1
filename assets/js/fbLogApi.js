    window.fbAsyncInit = function () {
        FB.init({
            appId: '187620591743427',
            xfbml: true,
            version: 'v2.8'
        });
        FB.AppEvents.logPageView();
        FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            console.log("connected");
        } else {
            console.log("not connected");
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

    function login(){
        FB.login(function(response){
            if(response.status === 'connected'){
                console.log("connected");
            }else {
                console.log("not connected")
            }
        });
    }   
    
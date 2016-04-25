/**
 * Created by Sufiyan on 4/25/2016.
 */
var app=angular.module('myApp',['firebase']);




var ref = new Firebase("https://sbabaapp.firebaseio.com");
app.controller('loginCtrl', function ($scope) {
$scope.doLogin=ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
        console.log("Login Failed!", error);
    } else {
        console.log("Authenticated successfully with payload:", authData);
    }
});


$state.go('/chat')




});
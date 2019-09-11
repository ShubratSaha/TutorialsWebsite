'use strict'
var ctr = 0;

var app = angular.module("myApp", []);

app.controller("loginCtl", ["$scope", "$http", "$log", function ($scope, $http, $log) {
    $scope.user = "";
    $scope.pwd = "";
    $scope.data = new Array;
    $scope.getUser = function () {
        $http({
            url: 'logindetails.json',
            method: 'GET'
        }).then(function (resp) {
            $scope.data = resp.data;
        }, function (resp) {
            $log.error("error Occured..");
        });

        for (var i = 0; i < $scope.data.length; i++) {
            if ($scope.user == $scope.data[i].name && $scope.pwd == $scope.data[i].password) {
                ctr++;
                window.location = "login.html";
            }
        }
        if ($scope.user == "") {
            alert("The username is required.");
        } else if ($scope.pwd == "") {
            alert("The password is required.");
        } else if (ctr == 0) {
            alert("Wrong Details.");
        }
    };
}]);
/*app.controller("loginCtl", ["$scope", "loginService", function ($scope, loginService) {
    $scope.getUser = function () {
        $scope.data = new Array;

        $http({
            url: 'logindetails.json',
            method: 'GET'
        }).then(function (resp) {
            $scope.data = resp;
        }, function (resp) {
            $log.error("error Occured..");
        });

        for (var i = 0; i < $scope.data.length; i++) {
            if (document.loginForm.user.value == $scope.data[i].name && document.loginForm.pwd.value == $scope.data[i].password) {
                ctr++;
                return (true);
            }
        }
        if (document.loginForm.user.value == "") {
            alert("The username is required.");
            document.loginForm.user.focus();
            return (false);
        } else if (document.loginForm.pwd.value == "") {
            alert("The password is required.");
            document.loginForm.pwd.focus();
            return (false);
        } else if (ctr == 0) {
            alert("Wrong Details.");
            document.loginForm.user.focus();
            return (false);
        }
    };
}]);*/

/*app.service("loginService", ["$http", "$log", function ($http, $log) {
    this.getUserList = function (cb) {
        $http({
            url: 'logindetails.json',
            method: 'GET'
        }).then(function (resp) {
            $log.log(resp.data);
            cb(resp.data)
        }, function (resp) {
            $log.error("error Occured..");
        });
    };
}]);*/
/*var app = angular.module("myApp", []);

var ctr = 0;

app.controller("loginCtl", ["$scope", "$log", "$http", function ($scope, $log, $http) {
                $scope.validate = function () {
                    $http({
                        url: "js/logindetails.json",
                        method: "GET"
                    }).then(function (data) {
                        console.log("Success");
                        for (var i = 0; i < data.length; i++) {
                            $log.log(data[i].name + data.password);
                            if (document.loginForm.user.value == data[i].name && document.loginForm.pwd.value == data[i].password) {
                                return(true);
                                ctr++;
                            }
                        }
                        if (document.loginForm.user.value == "") {
                            alert("The username is required.");
                            document.loginForm.user.focus();
                            return(false);
                        } else if (document.loginForm.pwd.value == "") {
                            alert("The password is required.");
                            document.loginForm.pwd.focus();
                            return(false);
                        } else if (ctr == 0) {
                            alert("Wrong Details.");
                            document.loginForm.user.focus();
                            return(false);
                        }
                    }, function (data) {
                        $log.error("Error Ocurred...");
                    });
                };
    }]);*/
/*var app = angular.module("myApp", []);

app.controller("loginCtl", ["$scope", "$http", "loginService", function ($scope, $http, loginService) {
    $scope.validate = function () {
        loginService.doFetch(function (r) {
            $scope.res = r;
        });
        return($scope.res);
    }
}]);

var ctr = 0;

app.service("loginService", ["$http", "$log", function ($http, $log) {
    this.doFetch = function (cb) {
        $http({
            url: "js/logindetails.json",
            method: "GET"
        }).then(function (data) {
            for (var i = 0; i < data.length; i++) {
                $log.log(data[i].name + data.password);
                if (document.loginForm.user.value == data[i].name && document.loginForm.pwd.value == data[i].password) {
                    cb(true);
                    ctr++;
                }
            }
            if (document.loginForm.user.value == "") {
                alert("The username is required.");
                document.loginForm.user.focus();
                cb(false);
            } else if (document.loginForm.pwd.value == "") {
                alert("The password is required.");
                document.loginForm.pwd.focus();
                cb(false);
            } else if (ctr == 0) {
                alert("Wrong Details.");
                document.loginForm.user.focus();
                cb(false);
            }
        }, function (data) {
            $log.error("Error Ocurred...");
        });
    };
}]);*/

/*
var ctr = 0;

var data = [
    {
        "name": "Shubrat",
        "password": "12345678",
        "type": "admin"
                    },
    {
        "name": "Ashit",
        "password": "Avenzer07",
        "type": "enduser",
                    }
                ]

function validate() {
    for (i = 0; i < data.length; i++) {
        if (document.loginForm.user.value == data[i].name && document.loginForm.pwd.value == data[i].password) {
            return (true);
            ctr++;
        }
    }
    if (document.loginForm.user.value == "") {
        alert("The username is required.");
        document.loginForm.user.focus();
        return (false);
    } else if (document.loginForm.pwd.value == "") {
        alert("The password is required.");
        document.loginForm.pwd.focus();
        return (false);
    } else if (ctr == 0) {
        alert("Wrong Details.");
        document.loginForm.user.focus();
        return (false);
    }
}
*/

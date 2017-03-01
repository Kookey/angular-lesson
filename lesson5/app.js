/**
 * Created by wxl19 on 2016/12/21.
 */
var app = angular.module("myApp",[]);
app.controller("ParentController",function ($scope) {
    $scope.person = {
        age:10
    };
});

app.controller("ChildController",function ($scope) {
    $scope.sayHello = function () {
        $scope.person.name='Wangxingl';
    }
});
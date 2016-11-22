/**
 * Created by wxl19 on 2016/11/22.
 */
var app = angular.module("myApp",[]);

app.controller("myContrl",function ($scope) {
    $scope.fName="";
    $scope.lName="";
    $scope.passw1 = '';
    $scope.passw2 = '';

    $scope.users = [
        {id:1, fName:'Hege',lName:"Pege" },
        {id:2, fName:'Kim',lName:"Pim" },
        {id:3, fName:'Sal',lName:"Smith" },
        {id:4, fName:'Jack',lName:"Jones" },
        {id:5, fName:'John',lName:"Doe" },
        {id:6, fName:'Peter',lName:"Pan" }
    ];

    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;

    $scope.editUser = function(id){
        if (id=='new'){
            $scope.edit = true;
            $scope.incomplete = true;
            $scope.fName = '';
            $scope.lName = '';
        }else{
            $scope.edit = false;
            $scope.data={fName : $scope.users[id-1].fName,lName:$scope.users[id-1].lName};
        }
    }

    $scope.$watch('data.passw1',function () {
        $scope.test();
    });
    $scope.$watch('data.passw2',function () {
        $scope.test();
    });
    $scope.$watch('data.fName',function () {
        $scope.test();
    });
    $scope.$watch('data.lName',function () {
        $scope.test();
    });

    $scope.test = function () {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fName.length ||
            !$scope.lName.length ||
            !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    }

});

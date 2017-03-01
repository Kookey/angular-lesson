/**
 * Created by wxl19 on 2016/11/22.
 */
var app = angular.module("myApp",[]);

app.controller("myContrl",function ($scope) {
    $scope.data = {fName:'',lName:'',passw1:'',passw2:''};
    $scope.address = "11111111111";

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
            $scope.data.fName = '';
            $scope.data.lName = '';
            $scope.data.passw1 = '';
            $scope.data.passw2 = '';
        }else{
            $scope.edit = false;
            $scope.data.fName = $scope.users[id-1].fName;
            $scope.data.lName = $scope.users[id-1].lName;
        }
    }

    $scope.$watch('data.passw1',function (newVal,oldVal,scope) {
        // scope.address = "123456789";
        console.dir(scope);
        $scope.test();
    });
    $scope.$watch('data.passw2',function (newVal,oldVal,scope) {
        console.dir(scope);
        $scope.test();
    });
    $scope.$watch('data.fName',function (newVal,oldVal,scope) {
        console.dir(scope);
        $scope.test();
    });
    $scope.$watch('data.lName',function (newVal,oldVal,scope) {
        console.dir(scope);
        $scope.test();
    });

    $scope.test = function () {
        if ($scope.data.passw1 !== $scope.data.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.data.fName.length ||
            !$scope.data.lName.length ||
            !$scope.data.passw1.length || !$scope.data.passw2.length)) {
            $scope.incomplete = true;
        }
    }

});

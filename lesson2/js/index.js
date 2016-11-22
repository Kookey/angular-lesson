angular.module("myApp", []).controller("myControl", function($scope) {

  $scope.fName = "";
  $scope.lName = "";
  $scope.passw1 = '';
  $scope.passw2 = '';

  $scope.edit = true;
  $scope.error = false;
  $scope.incomplete = false;

  $scope.users = [{
    id: 1,
    fName: 'Hege',
    lName: "Pege"
  }, {
    id: 2,
    fName: 'Kim',
    lName: "Pim"
  }, {
    id: 3,
    fName: 'Sal',
    lName: "Smith"
  }, {
    id: 4,
    fName: 'Jack',
    lName: "Jones"
  }, {
    id: 5,
    fName: 'John',
    lName: "Doe"
  }, {
    id: 6,
    fName: 'Peter',
    lName: "Pan"
  }];

  $scope.editUser = function(id) {

    if (id == "new") {
      $scope.edit = false;
      $scope.incomplete = true;
      $scope.fName = "";
      $scope.lName = "";
      $scope.passw1 = '';
      $scope.passw2 = '';
    } else {
      $scope.edit = true;
      $scope.fName = $scope.users[id - 1].fName;
      $scope.lName = $scope.users[id - 1].lName;
    }
  }

  $scope.$watch('fName', function() {
    $scope.test();
  });
  $scope.$watch('lName', function() {
    $scope.test();
  });
  $scope.$watch('passw1', function() {
    $scope.test();
  });
  $scope.$watch('passw2', function() {
    $scope.test();
  });

  $scope.test = function() {
    if ($scope.passw1 != $scope.passw2) {
      $scope.error = true;
    } else {
      $scope.error = false;
    }
    $scope.incomplete = false;
    if ($scope.edit &&(!$scope.fName.length || !$scope.lName.length || !$scope.passw1.length || !$scope.passw2.length)) {
      $scope.incomplete = true;
    }
  }
});
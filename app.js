var app = angular.module("contacts", []);

app.controller('ContactController', ["$scope", "ContactList", function($scope, ContactList){
   $scope.contactData = ContactList.contactList;
   $scope.people = [];
   $scope.name = "";
   $scope.email = "";
   $scope.phone = "";
   $scope.submit = function () {
     var person = {};
     person.name = $scope.name;
     person.email = $scope.email;
     person.phone = $scope.phone;
     $scope.people.push(person)
     $scope.name = "";
     $scope.email = "";
     $scope.phone = "";
   }
}]);

// app.controller("contacts", function($scope) {
//   $scope.people = [];
//   $scope.name = "";
//   $scope.email = "";
//   $scope.phone = "";
//   $scope.submit = function () {
//     var person = {};
//     person.name = $scope.name;
//     person.email = $scope.email;
//     person.phone = $scope.phone;
//     $scope.people.push(person)
//     $scope.name = "";
//     $scope.email = "";
//     $scope.phone = "";
//   }
// })

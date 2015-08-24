app.controller('ContactsController', ["$scope", "ContactList", function($scope, ContactList){
   $scope.contactData = ContactList.contactList;
   $scope.addContact = function () {
     var person = {};
     person.name = $scope.person.name;
     person.email = $scope.person.email;
     person.phone = $scope.person.phone;
     ContactList.addContact(person)
     $scope.person.name = "";
     $scope.person.email = "";
     $scope.person.phone = "";
   }
   $scope.removeContacts = function(person) {
     ContactList.removeContact(person);
   }
}]);

//controller is functionality on the page, in the html
// factory is functionality over the network


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

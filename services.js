app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [];

  ContactList.addContact = function(person) {
    ContactList.contactList.push(person);
  };

  ContactList.findContact = function(name) {
    // TODO
  };

  ContactList.removeContact = function(person) {
    var indexIt = ContactList.contactList.indexOf(person);
    ContactList.contactList.splice(indexIt, 1)
  };
  return ContactList;
});

// app.factory('giphyapi', ["$http", "$q", function($http, $q) {
//   var giphyservice = {};
//   var baseUrl = "http://api.giphy.com/v1/gifs/search?q=''&api_key=dc6zaTOxFJmzC";
//   var searchTerm = '';
//
//   giphyservice.setSearchTerm = function(term) {
//     searchTerm = encodeURIComponent(term);
//   }
//
//   giphyservice.getSearchTerm = function() {
//     return decodeURIComponent(searchTerm);
//   }
//
//   giphyservice.search = function(term) {
//     if (term !== undefined) {
//       giphyservice.setSearchTerm(term);
//     }
//
//     var url = baseUrl + searchTerm;
//
//     var deferred = $q.defer();
//
//     $http.get(url).success(function(data) {
//       deferred.resolve(data);
//     }).error(function() {
//       deferred.reject("Error!")
//     });
//
//     return deferred.promise;
//   }
//
//   return giphyservice;
// }]);

myApp.service('FacebookService', ['$http', '$location', function($http, $location){
let self = this;
self.user = {};
console.log(self.user, 'user in service');

self.addUserToDB = function (user){
  console.log('in addUserToDB', user);

  $http({
    method: 'POST',
    url: '/fb',
    data: user
  }).then(function(response){
    console.log('success in post', response);
  }).catch(function(error){
    console.log('error in post', error);
  })
}

}])

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SubjectsController', function($scope, Subjects) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Subjects.all();

  $scope.remove = function(subject) {
    Subjects.remove(subject);
  };

  $scope.askAQuestion = function() {
    
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Subjects) {
  $scope.subject = Subjects.get($stateParams.subjectId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AddChatController', function($scope, $stateParams, Subjects, $http) {
  $scope.subjects = Subjects.all();

  $scope.formData = {};

  

});

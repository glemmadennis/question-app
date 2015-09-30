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

  $scope.subjects = Subjects.all();

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

  // Get all subjects and their questions
  $scope.subjects = Subjects.all();

  // Prepare to receive
  $scope.formData = {};

  $scope.processForm = function() {
    // Define the new question variable
    var newQuestion;

    // Adding neccesary data
    newQuestion = $scope.formData;
    newQuestion.id = 3;

    var question = $scope.formData.question;

    // the question
    newQuestion.questions = [{
      id: '',
      toWhom: '',
      question: ''
    }];

    newQuestion.questions[0].toWhom = $scope.formData.toWhom;
    newQuestion.questions[0].question = $scope.formData.question;
    newQuestion.questions[0].id = 5;

    // delete obsolete items
    delete newQuestion.toWhom;
    delete newQuestion.question;

    // added the new object to the scope
    $scope.formData = newQuestion;
    
    // added the object through the Subject add method
    Subjects.add(newQuestion);
  }

});

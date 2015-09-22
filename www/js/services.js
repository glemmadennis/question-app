angular.module('starter.services', [])

.factory('Subjects', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  var subjects = [{
    id: 0,
    title: 'Ziggo',
    lastEdited: 'Today at 15:43',
    lastText: 'test',
    questions: [{
      id: 0,
      question: 'a question about ziggo',
      dateTime: '12:13:45',
      fromwhom: 'user1',
      toWhom: 'user2',
      label: 'inbox',
      read: false
    }, {
      id: 1,
      question: 'another question about ziggo',
      dateTime: '12:13:45',
      fromwhom: 'user1',
      toWhom: 'user2',
      label: 'inbox',
      read: false
    }]
  }, {
    id: 1,
    title: 'Github',
    lastEdited: 'yesterday at 12:31',
    questions: [{
      id: 2,
      question: 'a question about github',
      dateTime: '12:13:45',
      fromwhom: 'user1',
      toWhom: 'user2',
      label: 'inbox',
      read: false
    }, {
      id: 3,
      question: 'another question about github',
      dateTime: '12:13:45',
      fromwhom: 'user2',
      toWhom: 'user1',
      label: 'inbox',
      read: false
    }]
  }, {
    id: 2,
    title: 'Main designs',
    lastEdited: '3 days ago at 14:12',
    questions: [{
      id: 4,
      question: 'a question about the main designs',
      dateTime: '12:13:45',
      fromwhom: 'user1',
      toWhom: 'user2',
      label: 'inbox',
      read: false
    }]
  }];

  return {
    all: function() {
      return subjects;
    },
    remove: function(chat) {
      subjects.splice(subjects.indexOf(chat), 1);
    },
    get: function(subjectId) {
      console.log(subjectId);
      for (var i = 0; i < subjects.length; i++) {
        // console.log("test");
        if (subjects[i].id === parseInt(subjectId)) {
          return subjects[i];
          // console.log("test");
          // console.log(subjects[i]);
        }
      }
      return null;
    }
  };
});

(function() {
    function taskController (Tasks, $scope, $interval, $firebaseArray) {
      this.all = Tasks.all
      var ref = firebase.database().ref().child("tasks");
      var tasks = $firebaseArray(ref);

      $scope.addTask = function(){
        Tasks.create({name: $scope.taskName, created_at: Date.now()});
        $scope.taskName = null
      }

    }

    angular
        .module('lifeHack')
        .controller('taskController',['Tasks', '$scope', '$interval', '$firebaseArray', taskController]);
})();

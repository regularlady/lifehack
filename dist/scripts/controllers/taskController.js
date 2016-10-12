(function() {
    function taskController (Tasks, $scope, $interval) {
      this.all = Tasks.all

      $scope.addTask = function(){
        Tasks.create({name: $scope.taskName, created_at: Date.now()});
        $scope.taskName = null
      }

    }

    angular
        .module('lifeHack')
        .controller('taskController',['Tasks', '$scope', '$interval', taskController]);
})();

(function() {
    function timerController ($scope, $interval) {

    $scope.time = 37500000
    $scope.buttonMsg = "Start Timer"

    var countdown = function() {
      $scope.time = $scope.time - 1000

      if($scope.time <= 0) {
        $interval.cancel(timer);
      }
    }

    var timer;

    $scope.timerTrigger = function() {
      if ( $scope.buttonMsg == "Start Timer" ) {
        timer = $interval(countdown, 2000)
        $scope.buttonMsg = "Reset Timer"
      } else {
        $interval.cancel(timer)
        $scope.buttonMsg = "Start Timer"
        $scope.time = 37500000
      };
    };
  }

    angular
        .module('lifeHack')
        .controller('timerController',['$scope', '$interval', timerController]);
})();

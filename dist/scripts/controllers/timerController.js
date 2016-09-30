(function() {
    function timerController ($scope, $interval, MY_CONSTANTS) {

    $scope.time = MY_CONSTANTS.workSessionTime
    $scope.buttonMsg = "Start Work"
    var timer;
    var onBreak = false;
    var workSession = 0;

    var countdown = function() {
      if($scope.time <= 0) {
        onBreak = !onBreak;
        $interval.cancel(timer);
        $scope.buttonMsg = (onBreak == false ? "Start Work" : "Start Break");
        $scope.time = (onBreak == false ? MY_CONSTANTS.workSessionTime : MY_CONSTANTS.breakSessionTime);
        if ( workSession == 4 ) {
          $scope.time = MY_CONSTANTS.longBreakSessionTime;
          workSession = 0;
        };
      } else {
        $scope.time -= 1000
      }
    }

    $scope.timerTrigger = function() {
      if ( $scope.buttonMsg == "Start Work" ) {
        timer = $interval(countdown, 1000)
        $scope.buttonMsg = "Reset Work";
        workSession += 1;
      } else if ($scope.buttonMsg == "Start Break") {
        timer = $interval(countdown, 1000)
        $scope.buttonMsg = "Reset Break";
      } else {
        $interval.cancel(timer)
        $scope.buttonMsg = (onBreak == false ? "Start Work" : "Start Break");
        $scope.time = (onBreak == false ? MY_CONSTANTS.workSessionTime : MY_CONSTANTS.breakSessionTime);
      };
    };
  }

    angular
        .module('lifeHack')
        .controller('timerController',['$scope', '$interval', 'MY_CONSTANTS', timerController]);
})();

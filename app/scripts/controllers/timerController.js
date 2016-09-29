(function() {
    function timerController ($scope, $interval, MY_CONSTANTS) {

    $scope.time = MY_CONSTANTS.workSessionTime
    $scope.buttonMsg = "Start Work"
    var timer;
    var onBreak = false;

    var countdown = function() {
      if($scope.time <= 0) {
        onBreak = !onBreak;
        $interval.cancel(timer);
        $scope.buttonMsg = (onBreak == false ? "Start Work" : "Start Break");
        $scope.time = (onBreak == false ? MY_CONSTANTS.workSessionTime : MY_CONSTANTS.breakSessionTime);
      } else {
        $scope.time -= 1000
      }
    }

    $scope.timerTrigger = function() {
      if ( $scope.buttonMsg == "Start Work" || $scope.buttonMsg == "Start Break") {
        timer = $interval(countdown, 1000)
        $scope.buttonMsg = (onBreak == false ? "Reset Work" : "Reset Break");
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

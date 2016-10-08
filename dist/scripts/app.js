(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });

        $stateProvider
            .state('timer',{
            url: '/',
            controller: 'timerController as timer',
            templateUrl: '/templates/timer.html'
        });

        $stateProvider
            .state('timer.task',{
            url: '/',
            controller: 'taskController as task'
        });
    }

angular
    .module('lifeHack', ['ui.router', 'firebase'])
    .constant('MY_CONSTANTS', {
      workSessionTime: 37500000,
      breakSessionTime: 7500000,
      longBreakSessionTime: 45000000
      // workSessionTime: 5000,
      // breakSessionTime: 3000,
      // longBreakSessionTime: 7000
    })
    .config(config);
})();

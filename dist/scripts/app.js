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
    }

angular
    .module('lifeHack', ['ui.router', 'firebase'])
    .config(config);
})();

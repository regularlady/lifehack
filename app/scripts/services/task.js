(function() {
    function Tasks($firebaseArray) {
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);

        return {
            all: tasks,
            create: function(newTask) {
                return tasks.$add(newTask);
            }
        };
    }

    angular
        .module('lifeHack')
        .factory('Tasks', ['$firebaseArray', Tasks]);
})();

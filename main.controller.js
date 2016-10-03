(function() {
  'use strict';

  angular.module('taskapp').controller('MainController', MainController);

  function MainController() {
    var mainVm = this;

    //to add new task
    mainVm.addTask = function() {
      mainVm.newTask.id = fakeTaskID();
      mainVm.tasks.push(mainVm.newTask);
      mainVm.newTask = null;
    };

    //to delete task
    mainVm.deleteTask = function(position) {
      mainVm.tasks.splice(position, 1);
      console.log(mainVm.tasks);
    };

    //sample json data
    mainVm.tasks = [{
      "id": "d1375d45-b16e-4855-bd39-ec8b323cb132",
      "taskName": "Homework"

    }, {
      "id": "d0103280-5ef3-424c-8822-0640ccfd1809",
      "taskName": "Pay phone bill",
    }];

    // fake id generator
    function fakeTaskID() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
  }

})();
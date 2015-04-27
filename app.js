var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('courses', {
    url: "/courses",
    templateUrl: "partials/courses.html",
    controller: 'CoursesCtrl'
  });

  $stateProvider.state('courses.students', {
    url: "/:courseId",
    templateUrl: "partials/courses.students.html",
    controller: 'StudentsCtrl'
  });
});

courseRoster.directive("welcome", function() {
    return {
        restrict: "E",
        template: "<h1>Welcome to the Course Roster Application</h1>"
    }
});

courseRoster.directive("enter", function() {
    return function(scope, element) {
        element.bind("mouseenter", function() {
            element.html("<h1>What's your favorite course this semester?</h1>");
        });
    }
});

courseRoster.directive("leave", function() {
    return function(scope, element) {
        element.bind("mouseleave", function() {
            element.html("<h1>Epicodus!</h1>");
        });
    }
});

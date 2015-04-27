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
        restrict: "A",
        template: "Welcome to the Course Roster System"
    }
});

courseRoster.directive("enter", function() {
    return function(scope, element) {
        var temp;
        element.bind("mouseenter", function() {
            temp = element.text();
            element.text("Epicodus!1!!");
        })
        element.bind("mouseleave", function() {
            element.text(temp);
        })
    }
});

// courseRoster.directive("leave", function() {
//     return function(scope, element) {
//         element.bind("mouseleave", function() {
//             element.text("<h4>Epicodus!</h4>");
//         })
//     }
// });

courseRoster.directive("puff", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            element.addClass(attrs.puff);
        })
    }
});

courseRoster.directive("puff", function() {
    return function(scope, element, attrs) {
        element.bind("mouseleave", function() {
            element.removeClass(attrs.puff);
        })
    }
});


courseRoster.directive("sampleCourse", function () {
    return {
        scope: {
            courseName: "@"
        },
        template: "<div>{{ courseName }}</div>"
    }
});

courseRoster.directive("alertUser", function() {
    return {
        scope: {
            alert: "&"
        },
        template: "<input type='text' ng-model='value'><button class='btn' ng-click='alert({message:value})'>DO IT</button>"
    }
});

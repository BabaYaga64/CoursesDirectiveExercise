courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
  $scope.addCourse = function() {
    var name = $scope.courseName;
    $scope.CoursesFactory.addCourse(name);
    $scope.courseName = null;
  }
});

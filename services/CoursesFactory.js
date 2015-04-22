courseRoster.factory('CoursesFactory', function() {
  var factory = {};
  factory.courses = [];
  factory.addCourse = function(name) {
    factory.courses.push({
      name: name,
      id: factory.courses.length + 1,
      students: []
    });
  };
  return factory;
});

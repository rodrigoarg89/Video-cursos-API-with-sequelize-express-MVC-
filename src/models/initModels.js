const Users = require("./users.models");
const Courses = require("./courses.models");
const UserCourses = require("./userCourses.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");

const initModels = () => {

  Courses.belongsTo(Categories, { as: "Contents", foreignKey: "category_id" });
  Categories.hasMany(Courses, { as: "Planification", foreignKey: "category_id" });

  Videos.belongsTo(Courses, { as: "Records", foreignKey: "course_id" });
  Courses.hasMany(Videos, { as: "Material_learn", foreignKey: "course_id" });

  UserCourses.belongsTo(Users, {
    as: "student",
    foreignKey: "user_id",
  });
  Users.hasMany(UserCourses, {
    as: "courses",
    foreignKey: "user_id",
  });

  UserCourses.belongsTo(Courses, {
    as: "course",
    foreignKey: "course_id",
  });
  Courses.hasMany(UserCourses, {
    as: "courses",
    foreignKey: "course_id",
  });
};

module.exports = initModels;
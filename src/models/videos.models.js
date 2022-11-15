const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./users.models");

const Videos = db.define("videos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Courses,
      key: "id",
    },
    field: "course_id",
  }
});

module.exports = Videos;
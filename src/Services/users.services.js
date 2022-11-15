const Videos = require("../models/videos.models");
const Categories = require("../models/categories.models");
const UserCourses = require("../models/userCourses.models");
const Courses = require("../models/courses.models");
const Users = require("../models/users.models");

class UserServices {

  static async getAll() {
// all user
      try {
        const result = await Users.findAll({
          attributes: ["id", "first_name", "last_name", "email"],
        }); 
        return result;
      } catch (error) {
        throw error;
      }
    }
//user by id
  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: ["id",  "first_name", "last_name", "email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
//user with his courses
  static async getUserJoinCourse(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["id", "first_name", "last_name"], 
        include: {
          model: Courses,
          as: "courses",
          attributes: {
            exclude: ["id", "description", "instructor", "categoryId", "category_id"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

//create user
  static async add(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
//update user
static async update(updateData, id) {
    try {
      const result = await Users.update(updateData, {
        where: { id },
        attributes: ["first_name", "last_name", "password"]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

// All courses
  static async getAllCourses() {
    try {
      const result = await Courses.findAll({
        attributes: ["id", "title", "url"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

// All courses join to categories and videos
  static async getCoursesJoinCategoriesJoinVideos() {
    try {
      const result = await Courses.findAll({
        attributes: ["title"],
        include: {
          model: Categories,
          as: "categories",
          attributes: ["name"],
          include: {
            model: Courses,
            as: "courses",
            attributes: ["title"],
            include: {
              model: Videos,
              as: "videos",
              attributes: ["title", "url"],
            },
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

//Create newCourse
static async addCourse(newCourse) {
    try {
      const result = await Courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
//Update course - just change description
//Create videos
static async addVideo(newVideo) {
    try {
      const result = await Videos.create(newVideo);
      return result;
    } catch (error) {
      throw error;
    }
  }
//Delete Videos
//Create category
static async addCategory(newCategory) {
    try {
      const result = await Categories.create(newCategory);
      return result;
    } catch (error) {
      throw error;
    }
  }
//Delete Category

}

module.exports = UserServices;

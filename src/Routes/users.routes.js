const { Router } = require("express");

const {
  getAllUsers,
  getUserById,
  getUserWithCourses,
  getAllCourse,
  createUser,
  updateUser,
  getCoursesWithCategorieAndVideos,
  createCourse,
  addNewVideo,
  addNewCategory
} = require("../Controllers/users.controllers");

const router = Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);
router.get("/courses", getAllCourse);
router.get("/courses/categories/videos", getCoursesWithCategorieAndVideos);
router.post("/courses", createCourse);
router.post("/videos", addNewVideo);
router.post("/categories", addNewCategory);

router.get("/users/:id", getUserById);
router.get("/users/:id/courses", getUserWithCourses);
router.put("/users/:id", updateUser);

module.exports = router;

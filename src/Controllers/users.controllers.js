const UserServices = require("../Services/users.services");


const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserWithCourses = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserJoinCourse(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.add(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "check the information",
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;
    const result = await UserServices.update(dataUpdate, id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getAllCourse = async (req, res, next) => {
    try {
      const result = await UserServices.getAllCourses();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

const getCoursesWithCategorieAndVideos = async (req, res, next) => {
  try {
    const result = await UserServices.getCoursesJoinCategoriesJoinVideos();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createCourse = async (req, res, next) => {
  try {
    const newCourse = req.body;
    const result = await UserServices.addCourse(newCourse);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "check the information",
    });
  }
};

const addNewVideo = async (req, res, next) => {
  try {
    const newVideo = req.body;
    const result = await UserServices.addVideo(newVideo);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "check the information",
    });
  }
};

const addNewCategory = async (req, res, next) => {
  try {
    const newVideo = req.body;
    const result = await UserServices.addCategory(newVideo);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "check the information",
    });
  }
};


module.exports = {
  getAllUsers,
  getUserById,
  getUserWithCourses,
  createUser,
  updateUser,
  getAllCourse,
  getCoursesWithCategorieAndVideos,
  createCourse,
  addNewVideo,
  addNewCategory,
  
};

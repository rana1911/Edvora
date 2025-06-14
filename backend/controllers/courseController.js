import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Course } from "../models/Course.js";
import getDataUri from "../utils/dataUri.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import cloudinary from "cloudinary";

export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const courses = await Course.find().select("-lectures");
  res.send(200).json({
    success: true,
    courses,
  });
});

export const createCourse = async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;

  if (!title || !description || !category || !createdBy)
    return next(new ErrorHandler("Please add all fields", 400));

  const file = req.file;
  const fileUri = getDataUri(file);
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,    
    },
  });
  res.send(201).json({
    success: true,
    meassage: "Course created successfully. You can add lectures now.",
  });
};

export const getCourseLectures = catchAsyncError(async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  if (!course) return next(new ErrorHandler("Invalid Course Id", 404));

  course.views += 1;

  await course.save();
  res.status(200).json({
    success: true,
    lectures: course.lectures,
  });
});

export const addLecture = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const file = req.file;

  const course = await Course.findById(id);
  if (!course) return next(new ErrorHandler("Invalid Course Id", 404));

  course.lectures.push({
    title,
    description,
    video: {
      public_id: "url",
      url: "url",
    },
  });
  course.numOfVideos = course.lectures.length;

  await course.save();
  res.status(200).json({
    success: true,
    message: "Lecture added in course",
  });
});
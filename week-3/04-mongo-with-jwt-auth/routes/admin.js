const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET}  = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    massage: "Admin Created Successfully",
  });
});

router.post("/signin",  async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
const user= await User.find({
  username,
  password
})
if(user){
  const token = jwt.sign(
    {
      username,
    },
    JWT_SECRET
  );
  res.json({
    token,
  });
}else{
  res.status(411).json({
    massage :"invalid login credential "
  })
}
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imagelink = req.body.imagelink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imagelink,
    price,
  });
  res.json({
    massage: "Course Created Successfully ",
    CourseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;

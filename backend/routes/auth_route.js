const express = require("express");
const { findAll, save, findById, deleteById, update } = require("../controller/UserController");

const router = express.Router();
const multer = require("multer")
// const storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//     cb(null, "user_images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
const CustomerValidation = require("../validation/UserValidation")


// CRUD operations
router.get("/",findAll);        // Fetch all users
// router.post("/",CustomerValidation,upload.single('file'), save);          // Create a new user
router.get("/:id", findById);    // Fetch a user by ID
router.delete("/:id", deleteById); // Delete a user by ID
router.put("/:id", update);      // Update a user by ID

module.exports = router;
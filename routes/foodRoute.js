import express from 'express';
// import { addFood } from '../controllers/foodController.js';
import multer from 'multer'; //image control
import path from 'path';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import { isAdmin } from '../middleware/isAdmin.js';

const foodRouter = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory to save images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Save with unique name
    }
});

const upload = multer({ storage: storage });

foodRouter.post("/add",isAdmin,  upload.single("image"),addFood);
foodRouter.get("/list", isAdmin, listFood);
foodRouter.post("/remove", isAdmin, removeFood);

export default foodRouter;

// http://localhost:7400/api/food/list
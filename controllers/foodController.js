
import fs from 'fs';
import { foodModel } from '../models/foodModel.js';



export const addFood = async (req, res) => {
    try {
        if (!req.file) {
            throw new Error('Image file is required');
        }

        const { name, description, price, available, category } = req.body;
        const image_filename = `${req.file.filename}`;

        const food = new foodModel({
            name,
            description,
            price,
            image: image_filename,
            available,
            category,
            quantity
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });
        // data: food 
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "Food Not Added", error: error.message });
    }
};

// List food items
export const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error retrieving food items", error: error.message });
    }
};
// remove food idem

export const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { });
        await foodModel.findByIdAndDelete(req.body.id);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Cannot delete food", error: error.message });
    }
}


// module.exports = {
//     addFood,
// };
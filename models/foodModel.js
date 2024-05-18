// const mongoose = require('mongoose');

import mongoose from "mongoose";

// Define the schema for the Food model
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        required:true
    },
    quantity: {
        type: Number,
        required: true 
    }
});

// Create the Food model using the schema
export const foodModel = mongoose.models.food || mongoose.model('Food', foodSchema);
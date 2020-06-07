const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    quantity: {
        type: Number,
        default: 10
    },
    description: {
        type: String
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
    },
    image3: {
        type: String
    }
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;
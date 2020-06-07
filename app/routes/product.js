const express = require('express');
const ProductCtrl = require('../controllers/ProductController');

const Router = express.Router();

Router.get('/',ProductCtrl.index) // api.com/product/
      .post('/',ProductCtrl.create)   // api.com/product/
      .get('/:key/:value',ProductCtrl.find, ProductCtrl.show)    // api.com/product/category/Bioseguridad
      .put('/:key/:value', ProductCtrl.find, ProductCtrl.update)    // api.com/product/name/mascara
      .delete('/:key/:value', ProductCtrl.find, ProductCtrl.remove); // api.com/product/name/mascara


module.exports = Router;
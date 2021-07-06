//User Service
const ProductService = require('service/product.service');

exports.getProductById = async (req, res, next) =>{
  return await ProductService.getProductById(1);
}
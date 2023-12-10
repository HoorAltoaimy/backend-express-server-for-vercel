const express = require('express')

const { getAllProducts } = require('../controllers/productsController')

const productsRouter = express.Router()

productsRouter.get('/', getAllProducts)
// productsRouter.get('/:id', getProduct)
// productsRouter.post('/', createProduct)

module.exports = productsRouter

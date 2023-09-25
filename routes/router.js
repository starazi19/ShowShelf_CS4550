const express = require('express')
const router = express.Router();
const controller = require('../controller/controller')

/**
 * This file handles creating routes for all our API's.
 */

/**
 * Route made for GET request searches.
 * Represents http://localhost:3001/api/search
 * 
 * If we did router.get('/random', handlerFunction()), then we would create
 * a route like http://localhost:3001/api/random
 * 
 * It doesn't do anything till you define a handler function.
 * 
 */
router.get('/search', controller.search)

module.exports = router
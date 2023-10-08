const User = require('../models/user.model')
const bcrypt = require("bcrypt")
/**
 * This file contains handler functions which resolve
 * all our requests API requests (e.g searching movies).
 * 
 * They allows taking in a (req, res) which represents a 
 * request(sent from browser) and a result(sent back to browser).
 * 
 * To send stuff back to the browser, we sometimes use res.send(content)
 */

exports.login = async(req, res) => {
    const {username, password} = req.body
    req.session.user = username
    res.send('User Logged In')
}

/**
 * Registers a user
 * @param {*} req 
 * @param {*} res 
 */
exports.register = async(req, res) => {
    //Add the user to the database
    let {username, password} = req.body
    password = await bcrypt.hash(password, 10);
    await User.create({username, password, role: 'user'})
    req.session.user = username
    res.send('User registered')
}

/**
 * Searches for a show.
 * @param {*} req 
 * @param {*} res 
 */
exports.search = async(req, res) => {
    res.send("I am searching!")
}
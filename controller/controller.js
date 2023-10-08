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
    try {
        User.findOne({username : username}).then(async (user) => {
            const isUser = await bcrypt.compare(password, user.password)
            if(isUser) {
                req.session.user = username
                res.send(`Welcome ${username}`)
            } else {
                res.send('Wrong Password')
            }
        })
    } catch {
        res.status(500).send("User doesn't exist")
    }
    
    /*
    const isUser = await bcrypt.compare(password, user.password)
    if(isUser) {
        req.session.user = username
        res.send(`Welcome ${username}`)
    }
    res.send('Wrong Password')
    */
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
    await User.create({username, password, admin: false}).catch(() => res.status(500).send('User exists'))
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
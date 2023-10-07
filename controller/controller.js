
/**
 * This file contains handler functions which resolve
 * all our requests API requests (e.g searching movies).
 * 
 * They allows taking in a (req, res) which represents a 
 * request(sent from browser) and a result(sent back to browser).
 * 
 * To send stuff back to the browser, we sometimes use res.send(content)
 */

exports.register = async(req, res) => {
    //Add the user to the database
    console.log("User registered")
}
exports.search = async(req, res) => {
    res.send("I am searching!")
}
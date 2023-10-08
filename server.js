/**
 * This is our Node.js Server!
 * 
 * You can run it using "npm run dev" in the terminal
 * You should see "Server listening on port 3001"
 * 
 * Open http://localhost:3001/ and it should serve you a login page.
 * 
 * All a server does is create paths called "routes" which is what we type
 * into the browser to visit a particular page or submit a search.
 * (e.g google.com/"path name") 
 * 
 * They are represented by functions which serve content 
 * or do some type of operation.
 * 
 * "app.get" is a method what the browser sends back when the user
 * visits the given route.
 * 
 * "app.use" tells the browser that for every request to the given route,
 *  call so and so method(which might be a router * check routes/router.js)
 * 
 *  For a quick demo created a simple login process using session and node
 * 
 * Give it a try ;)
 * 
 */
const mongoose = require('mongoose');
const express = require('express')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const app = express();
const cors = require('cors')
const path = require('path')
const routes = require('./routes/router')
require('dotenv').config();
/**
 * Represents a day in seconds.
 */
const oneDay = 1000 * 60 * 60 * 24;
const PORT = process.env.PORT || 3001
//session middleware
app.use(sessions({
    secret: process.env.TOKEN_SECRET,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cookieParser());
app.use('/api', routes);

mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@showshelf.qvcuviz.mongodb.net/showshelf`).then(console.log("Connection Successful"))
.catch(e => console.log("Connection failed"))

//const myusername = 'user' //username for website (no database yet to store users)
//const mypassword = 'pass' //password for website (no database yet to store users)

/**
 * This '/' route represents the default/"home" page AKA the first page you
 * see when u visit http://localhost:3001 or any domain.
 */
/*
app.get('/',(req,res) => {
    if(req.session.user){
        res.redirect('/protected')
    }else
    res.sendFile('views/index.html',{root:__dirname})
});
*/

/**
 * This function is called a middleware.
 * A middleware is a method you call before handling a request.
 * You can chain multiple of them together when handling a request.
 * They usually perform some type of operation or validation.
 * @param {*} req represents the request from the client(user)
 * @param {*} res represents the response from the server.
 * @param {*} next represents the next function in the chain.
 * @returns an unauthorized page if the user isn't logged in else the 
 * next function.
 */

const auth = function(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        return res.sendStatus(401);
    }
}


/*app.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        req.session.user = req.body.username
        console.log(req.session)
        res.redirect('/protected')
    }
    else{
        res.send('Invalid username or password');
    }
})
*/

app.get('/protected', auth, function (req, res) {
    res.send(`Welcome ${req.session.user} <a href=\'/logout'>click to logout</a>`)
});

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('*', async (req, res) => {
    res.send('Welcome to our server!')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
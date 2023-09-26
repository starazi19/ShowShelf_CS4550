/**
 * This is our Node.js Server!
 * 
 * You can run it using "npm run dev" in the terminal
 * 
 * Open http://localhost:3001/ and it should serve you whats on line 32
 * 
 * All this is doing is create paths called "routes" which are called 
 * like functions which  serve content or do some type of operation.
 * 
 * "app.get" defines what the browser sends back when the user
 * visits a given route.
 * 
 * "app.use" defines that all the routes selected in the method, call the functionality.
 *  I created a simple login process using session and node
 * 
 * Give it a try ;)
 * 
 */
const express = require('express')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const app = express();
const cors = require('cors')
const path = require('path')
const routes = require('./routes/router')
require('dotenv').config();
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
app.use('/api', routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cookieParser());

const myusername = 'rom'
const mypassword = 'pass'

app.get('/',(req,res) => {
    if(req.session.user){
        res.redirect('/protected')
    }else
    res.sendFile('views/index.html',{root:__dirname})
});

const auth = function(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        return res.sendStatus(401);
    }
}

app.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        req.session.user = req.body.username
        console.log(req.session)
        res.redirect('/protected')
    }
    else{
        res.send('Invalid username or password');
    }
})

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
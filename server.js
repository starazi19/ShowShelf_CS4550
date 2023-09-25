/**
 * This is our Node.js Server!
 * 
 * You can run it using "npm run dev" in the terminal
 * 
 * Open http://localhost:3001/ and it should serve you whats on line 17-18
 * 
 * All this is doing is create paths called "routes" which are called 
 * like functions which  serve content or do some type of operation.
 * 
 * "app.get" defines what the browser sends back when the user
 * visits a given route.
 * 
 * "app.use" defines that all the routes defined in the router.js file,
 *  should start with /api for example: http://localhost:3001/api/search.
 * 
 * Give it a try ;)
 * 
 */
const express = require('express') 
const app = express();
const cors = require('cors')
const path = require('path')
const routes = require('./routes/router')
require('dotenv').config();
const PORT = process.env.PORT || 3001
app.use(cors());
app.use('/api', routes)


app.get('*', async (req, res) => {
    res.send("Welcome to the server!")
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
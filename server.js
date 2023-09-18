const express = require('express')
const app = express();
const cors = require('cors')
const routes = require('./routes/router');
require('dotenv').config();
app.use(cors());
app.use('/api', routes);
const PORT = process.env.PORT || 3001;

app.get('*', async (req, res) => {
    res.status(400).send("Welcome to our server.");
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
const express = require('express')
const app = express()
require('dotenv').config(); 
const port = process.env.PORT || 5000; 
const router = (global.router = (express.Router()));

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use('/profile', require('./routes/profile.js'));
app.use('/garbage', require('./routes/garbage_spots.js'));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
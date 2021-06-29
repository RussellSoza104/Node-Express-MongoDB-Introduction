const express = require('express');
const router = require('./Routes/news');
const _mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();

//DB Connection
_mongoose.connect('mongodb://localhost/NewsPaper', { useNewUrlParser: true , useUnifiedTopology: true})
    .then(db => console.log("Database connected"))
    .catch(err => console.log(err));

//Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan("dev"));

//89264336 - Andres Amador

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(router);

// Start Server
app.listen(4000, () =>{
    console.log("Server on port", app.get('port'));
});
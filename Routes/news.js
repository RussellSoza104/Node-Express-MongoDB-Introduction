const express = require('express')
const router = express.Router();
var News = require('../Controllers/model');

//Routes 

router.get('/', async (req, res) => {
    //Find all elements in collections 
    const news = await News.find();
    res.render('header',{
        news
    });
});

router.post('/add-news', async (req, res) => {
    const news = new News(req.body);  
    console.log(news);
    
    //Save the new element in news collections
    await news.save();
    res.redirect('/');
})

module.exports = router;
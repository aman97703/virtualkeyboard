const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const jsPath = path.join(__dirname, "public/js");
const cssPath = path.join(__dirname, "public/css");

app.use(express.urlencoded({extended:false}));
app.use('/css',express.static(cssPath));
app.use('/js',express.static(jsPath));

app.set("view engine", "hbs"); // set template engine


app.get('/', (req, res) => {
    
    res.status(201).render("index");
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
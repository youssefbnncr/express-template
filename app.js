const express = require('express');
const app = express()

const userRouter = require('./routes/usersRouter')

const path = require('path');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "src");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use('/',userRouter)

app.listen(3000, ()=>{
    console.log('Application running at http://localhost:3000')
})
const db = require('../model/queries')

const getHome = (req,res) => {
    res.render('index');
}

const addUser = async(req,res) => {
    const {username} = req.body;
    await db.insertUser(username)
    res.redirect('/');
}

module.exports = {
    getHome,
    addUser
};
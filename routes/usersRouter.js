const { Router } = require('express');
const usersController = require("../controllers/usersController");

const { body, validationResult } = require("express-validator");

const router = Router();

router.get('/',usersController.getHome);
router.get('/signup',(req,res)=>res.render('signup',{error:[]}))
router.post('/addUser',
    [body('username').notEmpty().withMessage('username should be filled')],
    (req,res)=>{
    const err = validationResult(req);
    if(!err.isEmpty()){
        res.status(400).render('signup',{error:err.array()})
    }
    usersController.addUser(req,res)
    })
module.exports = router;
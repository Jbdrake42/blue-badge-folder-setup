const router = require("express").Router()
const User = require('../db').import("../models/user")


router.post('/create', function(req,res){
    let userModel = {
        email: req.body.user.email,
        password: req.body.user.password
    };
    User.create(userModel)
    .then(function (user) {
        let responceObject = {
            user: User,
        };
        res.json(responceObject);
    });
    .catch(function (err){
        res.json{error" err}
        })

module.exports = router;

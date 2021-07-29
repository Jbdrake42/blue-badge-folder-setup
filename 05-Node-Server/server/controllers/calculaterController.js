let router = require("express").Router()
// localhost:3000/calculater/add

router.post("/add", function(req,res){
    res.send('it works you nincompoop!')
})


module.exports = router
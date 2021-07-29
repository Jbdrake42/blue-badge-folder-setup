let express = require('express');
const app = express()
let journal = require('./controllers/journalController');
let user = require('./controllers/userController')
const sequelize = require("./db");
app.use("/test", function(req,res){
    res.send('this is a message from the test endpoint on the server!')
} );

sequelize.sync()

app.use(express.json())
app.use('/user', user)

app.use("/journal", journal )

app.listen(3000, function(){
    console.log("the app is listening on port 3000")
});



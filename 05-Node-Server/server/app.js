let express = require('express');
const app = express()
let journal = require('./controllers/journalController');
let user = require('./controllers/userController')
const sequelize = require("./db");
let testController = require('./controllers/testController')
app.use("/test", testController )
let calculaterController = require('./controllers/calculaterController')
sequelize.sync()
app.use('/calculator', calculaterController)
app.use(express.json())
app.use('/user', user)

app.use("/journal", journal )

app.listen(3000, function(){
    console.log("the app is listening on port 3000")
});



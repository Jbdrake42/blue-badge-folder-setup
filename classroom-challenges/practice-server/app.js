let express = require('express');
const app = express()


const sequelize = require("./db");
app.use(express.json())

let calculaterController = require('./controllers/calculaterController')
sequelize.sync()
app.use('/calculator', calculaterController)





app.listen(3000, function(){
    console.log("the app is listening on port 3000")
});



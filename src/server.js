const express = require("express")
const routes = require('./routes')
//const knexfile = require("../knexfile")
const pathApp = require('../dir')

const cors = require('cors')
const { text } = require("express")
require('dotenv').config()

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(routes);
app.use('/static', express.static(__dirname+'/tmp/uploads'))

app.get("/getImage/:img", function(req, res){
    const {img} = req.params
    res.sendFile(pathApp+"/tmp/uploads/"+img)
})

// catch all
app.use((error, req, res, next) =>{
    res.status(error.status || 500)
    res.json({error: error.message})
})

app.listen(process.env.PORT || 3333);
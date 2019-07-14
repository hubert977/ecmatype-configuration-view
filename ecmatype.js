const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 2500;
var path = require('path');
require ('./functions/connect-database');
app.get('/' , (req,res)=>{
    console.log(conf)
    res.sendFile('index.html', { root: '../frontend/configuration-view/configuration/dist'});
})
app.listen(port);
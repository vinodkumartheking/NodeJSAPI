const express = require('express')
const app = express()

app.get('/', function (req, res) {
    //MLO python

  res.send('Yes'+req.rawHeaders)
})

app.get('/GetMLres', function (req, res) {
    //MLO python

  res.send('ML'+req.rawHeaders)
})
app.listen(5050) // Portno 


//Port no
// 80 - http protocol 
//443 - https protocol
//2346 - SMTP - Simple Mail transfer protocol 
// UTP port no

// API 
// GET - used to get information - DDL change
//POST - data changes, DB changes, business 
//PUT- update 


// 200 - 400 client side error /status
//404 - Page not found
//202
//401 - Unauthorized 
//500 - server side error/status
//502/01
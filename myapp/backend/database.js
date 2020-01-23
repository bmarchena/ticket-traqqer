const express = require('express')
const cors = require('cors')
let bodyParser = require('body-parser')
const expApp = express()

// create application/json parser
//var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })


expApp.use(bodyParser.urlencoded({ extended: true }));
expApp.use(bodyParser.json());


expApp.use(cors())

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Disciplin334',
    database:'traqqerUsers'
})

connection.connect()


expApp.post('/', function (req, res) {
    let sql = `INSERT INTO users(username, password, plateno) VALUES('${req.body.username}', '${req.body.password}', '${req.body.plateno}')`

    connection.query(sql)
    console.log(req.body)
    res.json({data:"proplr"})
  })



  
expApp.get('/', function(req, res){

    // console.log(req);
    console.log('i am the get')
    res.json(null)
})

expApp.post('/add', function(req, res){
    console.log('here I am the post')
    res.json(null)
})

expApp.listen(5000)
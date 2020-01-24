const express = require('express')
const cors = require('cors')
let bodyParser = require('body-parser')
const expApp = express()
const fetch = require('node-fetch')

expApp.use(bodyParser.urlencoded({ extended: true }));
expApp.use(bodyParser.json());

expApp.use(cors())

const mysql = require('mysql')

let apiData = []

async function getApi() {
    fetch('https://data.cityofnewyork.us/resource/nc67-uf89.json')
    .then(res => res.json())
    .then(
        (res) => {
        apiData.push(res)}
    )
} 
 
getApi()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'superfly',
    database:'traqqerUsers'
})

connection.connect()


expApp.post('/addUser', function (req, res) {
    let userData = apiData.filter((vio) => { vio.plate === req.body.plateno
    })
    
    console.log('API DATA', apiData)
    console.log('USER DATA', userData)

    let sql1 = `SELECT * FROM users HAVING username = '${req.body.username}' OR plateno = '${req.body.plateno}'`

    let sql2 = `INSERT INTO users(username, password, plateno) VALUES('${req.body.username}', '${req.body.password}', '${req.body.plateno}')`

    connection.query(sql2)
    console.log(req.body)
  })

 expApp.post('/login', async function(req, res) {
    console.log(apiData)

    let sql = `SELECT * FROM users HAVING username = '${req.body.username}' AND password = '${req.body.password}'` ;

    let response

    connection.query(sql, async function (err, result) {
         if (err)
             throw err;
        console.log('Object Keys', Object.keys(result))

        Object.keys(result).forEach(async function (key) {
            let row = result[key];
            response = JSON.stringify(row);
            console.log('stringify', response);
            res.json({response})
        });
     })

    console.log('BEFORE SENDING:', response)

})


  
expApp.get('/', function(req, res){
    console.log('i am the get')
    res.json(null)
})

expApp.post('/add', function(req, res){
    console.log('here I am the post')
    res.json(null)
})

expApp.listen(5000)
const express = require('express')
const app = express()

let MongoClient = require('mongodb').MongoClient

const port = 3000

const urlencodedParser = express.urlencoded({extended: false})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.post("/form", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.login} - ${request.body.password}`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
},'192.168.0.102')
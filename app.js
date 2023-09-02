const http = require('http');

// function rq(request, response) {

// }

// http.createServer(rq)

// use above method to create function or use anonymous function below

// http.createServer(function(request, response){

// })

// or use arrow function

const server = http.createServer((request, response) => {
    console.log("Munish Sachdeva")
})

server.listen(4000);
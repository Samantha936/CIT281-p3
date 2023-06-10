
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const {coinCount} = require("./p3-module.js")
const port = 8080;
const server = http.createServer((req, res) => {
fs.readFile(`${__dirname}/index.html`, (err, data) => {
if (err) {
console.log(err);
    reply.code(500);
    } else {
res.statusCode = 200;
console.log("URL: ", req.url);
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end(); } });
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});

// Fastify below

const fastify = require("fastify")();
// Get route and JSON/object reply
fastify.get("/", (request, reply) => {
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(
{test: "This is a test"}
);
});

//convert to integers part 9
fastify.get("/coin", (request, reply) => {
    const { denom = 0, count = 0 } = request.query;

const countInt = parseInt(count)
const denomInt = parseInt(denom);
const coinValue = coinCount(countInt, denomInt);
reply
.code(200)
.header("Content-Type", "text/html")
.send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`)
})
// Switch part 10
fastify.get("/", (request, reply) => {
    const { option } = req.query;
});

//convert to int
const optionInt = parseInt(option);

let coinValue;

switch (optionInt) {
   case 1: 
   coinValue = coinCount({denom: 5, count: 3 }, { denom: 10, count: 2 }); 
    break;
   case 2:
    coinValue = coinCount(...coins);
    break;
   case 3:
    coinValue = coinCount(coins);
    break;
    default: 
    0
reply
.code(200)
.header("Content-Type", "application/json")
.send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`)}

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
if (err) {
console.log(err);
process.exit(1);
}
console.log(`Server listening on ${address}`);
});